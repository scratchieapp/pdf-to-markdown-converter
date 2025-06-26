const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

// Handle formidable import for different versions
let formidable;
try {
  // For newer versions where formidable exports as ES module
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
    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const pageCount = pdfDoc.getPageCount();
    const fileSize = pdfFile.size;
    const fileName = pdfFile.originalFilename || 'document.pdf';

    // Clean up temp file
    fs.unlinkSync(pdfFile.filepath);

    // Determine pricing and flow
    const isFreeEligible = pageCount <= 10;
    const price = isFreeEligible ? 0 : 3; // Launch discount: $3 (was $5)

    res.status(200).json({
      success: true,
      analysis: {
        fileName,
        pageCount,
        fileSize,
        isFreeEligible,
        price,
        message: isFreeEligible 
          ? `${pageCount} pages detected - Free with sign-in!`
          : `${pageCount} pages detected - $${price} to convert`
      }
    });

  } catch (error) {
    console.error('PDF analysis error:', error);
    res.status(500).json({
      error: 'Failed to analyze PDF. Please ensure it\'s a valid PDF file.',
      details: error.message
    });
  }
}