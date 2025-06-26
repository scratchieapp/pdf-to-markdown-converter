const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Handle formidable import for different versions
let formidable;
try {
  const formidableModule = require('formidable');
  formidable = formidableModule.default || formidableModule;
} catch (error) {
  console.error('Failed to import formidable:', error);
  throw new Error('Formidable module not available');
}

exports.config = {
  api: {
    bodyParser: false,
  },
  functions: {
    maxDuration: 30, // Short timeout for upload only
  },
};

module.exports = async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sessionId = uuidv4();
  
  try {
    const form = formidable({
      maxFileSize: 50 * 1024 * 1024, // 50MB
      filter: ({ mimetype }) => {
        return mimetype && mimetype.includes('pdf');
      },
    });

    const [fields, files] = await form.parse(req);
    
    const pdfFile = Array.isArray(files.pdf) ? files.pdf[0] : files.pdf;
    
    if (!pdfFile) {
      return res.status(400).json({ error: 'No PDF file uploaded' });
    }

    const pdfBuffer = fs.readFileSync(pdfFile.filepath);
    
    // Clean up temp file
    fs.unlinkSync(pdfFile.filepath);

    console.log(`PDF uploaded: ${pdfFile.originalFilename}, Size: ${pdfBuffer.length} bytes`);

    // Check if this is a paid conversion
    const paymentIntentId = fields.paymentIntentId ? fields.paymentIntentId[0] : null;
    console.log('Payment intent ID:', paymentIntentId);

    // Store PDF in global cache for processing
    if (!global.pdfCache) {
      global.pdfCache = new Map();
    }
    
    global.pdfCache.set(sessionId, {
      buffer: pdfBuffer,
      filename: pdfFile.originalFilename,
      paymentIntentId,
      uploadedAt: new Date(),
    });

    // Clean up old cache entries (over 10 minutes old)
    for (const [key, value] of global.pdfCache.entries()) {
      if (Date.now() - value.uploadedAt.getTime() > 600000) {
        global.pdfCache.delete(key);
      }
    }

    res.status(200).json({
      success: true,
      sessionId,
      message: 'PDF uploaded successfully, ready for processing',
      filename: pdfFile.originalFilename,
      fileSize: pdfBuffer.length
    });

  } catch (error) {
    console.error('Upload error:', error);
    
    res.status(500).json({
      error: error.message || 'Failed to upload PDF',
      sessionId,
      details: error.stack
    });
  }
}