const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

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

    console.log(`Processing PDF: ${pdfFile.originalFilename}, Size: ${pdfBuffer.length} bytes`);

    // For now, let's create a simple response to test the upload
    console.log(`PDF uploaded successfully: ${pdfFile.originalFilename}, Size: ${pdfBuffer.length} bytes`);
    
    // Import progress functions
    const progressModule = require('./progress');
    const { callMistralOCR } = require('./ocr/mistral');
    const { convertToMarkdown } = require('./ocr/markdownConverter');
    
    // Set initial progress
    progressModule.updateProgress(sessionId, {
      status: 'processing',
      message: 'Starting PDF conversion...',
      progress: 10
    });
    
    let markdown;
    
    // Check if this is a paid conversion
    const paymentIntentId = fields.paymentIntentId ? fields.paymentIntentId[0] : null;
    console.log('Payment intent ID:', paymentIntentId);
    
    try {
      // Enable real OCR processing now that upload flow is working
      const skipOCR = false; // OCR processing enabled
      
      if (skipOCR) {
        console.log('Skipping OCR for debugging...');
        markdown = `# ${pdfFile.originalFilename}\n\nTest conversion successful!\n\nFile size: ${pdfBuffer.length} bytes\nPayment ID: ${paymentIntentId || 'Free trial'}\n\nOCR processing temporarily disabled for debugging.`;
      } else {
        // Process PDF with OCR
        console.log('Calling Mistral OCR...');
        progressModule.updateProgress(sessionId, {
          status: 'processing',
          message: 'Processing PDF with Mistral AI...',
          progress: 30
        });
        
        // Add timeout for OCR (4 minutes to stay under 5-minute Vercel limit)
        const ocrPromise = callMistralOCR(pdfBuffer, pdfFile.originalFilename);
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
      }
      
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
      
      // Fallback content with helpful error message
      markdown = `# ${pdfFile.originalFilename}\n\n⚠️ **OCR Processing Failed**\n\n${errorMessage}\n\n**Technical Details:**\n- File size: ${pdfBuffer.length} bytes\n- Error: ${ocrError.message}\n- Payment ID: ${paymentIntentId || 'Free trial'}\n\nYour payment was processed successfully. Please contact support for assistance.`;
    }
    
    // Generate download filename
    const originalName = pdfFile.originalFilename || 'document.pdf';
    const nameWithoutExt = path.parse(originalName).name;
    const firstTenChars = nameWithoutExt.substring(0, 10);
    const filename = `${firstTenChars}_converted.md`;
    
    // For serverless, we'll return the markdown content directly
    // In a production setup, you'd want to store this in a cloud storage service
    const downloadUrl = `/api/download?sessionId=${sessionId}&filename=${encodeURIComponent(filename)}`;
    
    // Store in temporary cache (you'd want to use Redis or cloud storage in production)
    global.conversionCache = global.conversionCache || new Map();
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
    
    console.log('Conversion completed successfully');

    res.status(200).json({
      success: true,
      sessionId,
      downloadUrl,
      filename,
      markdownLength: markdown.length
    });

  } catch (error) {
    console.error('Processing error:', error);
    
    res.status(500).json({
      error: error.message || 'Failed to process PDF',
      sessionId,
      details: error.stack
    });
  }
}