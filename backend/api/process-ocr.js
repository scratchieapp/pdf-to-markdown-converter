const { callMistralOCR } = require('./ocr/mistral');
const { convertToMarkdown } = require('./ocr/markdownConverter');
const path = require('path');

exports.config = {
  api: {
    bodyParser: true, // Enable JSON body parsing
  },
  functions: {
    maxDuration: 300, // 5 minutes for OCR processing
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

  console.log('OCR processing request received:', {
    method: req.method,
    body: req.body,
    headers: req.headers['content-type']
  });

  const { sessionId } = req.body;

  if (!sessionId) {
    console.error('No session ID provided:', req.body);
    return res.status(400).json({ error: 'Session ID required' });
  }

  console.log('Processing OCR for session:', sessionId);

  try {
    // Get PDF from cache
    const pdfData = global.pdfCache?.get(sessionId);
    
    if (!pdfData) {
      return res.status(404).json({ error: 'PDF not found or expired' });
    }

    console.log(`Starting OCR processing for session: ${sessionId}`);
    
    // Import progress functions
    const progressModule = require('./progress');
    
    progressModule.updateProgress(sessionId, {
      status: 'processing',
      message: 'Starting OCR processing...',
      progress: 10
    });

    let markdown;
    
    try {
      console.log('Calling Mistral OCR...');
      progressModule.updateProgress(sessionId, {
        status: 'processing',
        message: 'Processing PDF with Mistral AI...',
        progress: 30
      });
      
      // Add timeout for OCR (4 minutes)
      const ocrPromise = callMistralOCR(pdfData.buffer, pdfData.filename);
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('OCR processing timeout')), 240000)
      );
      
      const ocrResult = await Promise.race([ocrPromise, timeoutPromise]);
      
      progressModule.updateProgress(sessionId, {
        status: 'processing',
        message: 'Converting to Markdown...',
        progress: 70
      });
      
      // Convert OCR result to markdown
      markdown = await convertToMarkdown([{ content: ocrResult, pageRange: [0, -1] }], sessionId);
      
    } catch (ocrError) {
      console.error('OCR processing failed:', ocrError);
      
      // Provide different error messages based on the error type
      let errorMessage = 'OCR processing failed. Please try again or contact support.';
      if (ocrError.message.includes('timeout')) {
        errorMessage = 'OCR processing took too long. Your PDF may be too large or complex. Please try with a smaller file or contact support.';
      } else if (ocrError.message.includes('401')) {
        errorMessage = 'OCR service authentication failed. Please contact support.';
      } else if (ocrError.message.includes('422')) {
        errorMessage = 'Your PDF format is not supported or may be corrupted. Please try with a different PDF.';
      }
      
      markdown = `# ${pdfData.filename}\n\n⚠️ **OCR Processing Failed**\n\n${errorMessage}\n\n**Technical Details:**\n- File size: ${pdfData.buffer.length} bytes\n- Error: ${ocrError.message}\n- Payment ID: ${pdfData.paymentIntentId || 'Free trial'}\n\nYour payment was processed successfully. Please contact support for assistance.`;
    }
    
    // Generate download filename
    const nameWithoutExt = path.parse(pdfData.filename).name;
    const firstTenChars = nameWithoutExt.substring(0, 10);
    const filename = `${firstTenChars}_converted.md`;
    
    const downloadUrl = `/api/download?sessionId=${sessionId}&filename=${encodeURIComponent(filename)}`;
    
    // Store in conversion cache
    if (!global.conversionCache) {
      global.conversionCache = new Map();
    }
    
    global.conversionCache.set(sessionId, {
      filename,
      content: markdown,
      createdAt: new Date(),
    });

    // Mark as complete
    progressModule.updateProgress(sessionId, {
      status: 'complete',
      message: 'Conversion completed successfully!',
      progress: 100,
      downloadUrl
    });
    
    // Clean up PDF cache
    global.pdfCache?.delete(sessionId);
    
    console.log('OCR processing completed successfully');

    res.status(200).json({
      success: true,
      sessionId,
      downloadUrl,
      filename,
      markdownLength: markdown.length
    });

  } catch (error) {
    console.error('OCR processing error:', error);
    
    res.status(500).json({
      error: error.message || 'Failed to process PDF',
      sessionId,
      details: error.stack
    });
  }
}