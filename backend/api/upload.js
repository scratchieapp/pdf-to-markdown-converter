import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { processPDF } from './_utils/processPDF.js';
import { convertToMarkdown } from './_utils/markdownConverter.js';
import { updateProgress } from './progress.js';

export const config = {
  api: {
    bodyParser: false,
  },
  functions: {
    maxDuration: 300, // 5 minutes
  },
};

export default async function handler(req, res) {
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

    // Update progress callback
    const progressCallback = (progress) => {
      updateProgress(sessionId, progress);
    };

    updateProgress(sessionId, {
      status: 'processing',
      message: 'Starting PDF processing...',
      progress: 0
    });

    // Process PDF with OCR
    const ocrResults = await processPDF(pdfBuffer, progressCallback);
    
    updateProgress(sessionId, {
      status: 'converting',
      message: 'Converting OCR results to Markdown...',
      progress: 75
    });

    // Convert to Markdown
    const markdown = await convertToMarkdown(ocrResults, progressCallback);
    
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

    updateProgress(sessionId, {
      status: 'complete',
      message: 'Conversion complete!',
      progress: 100,
      downloadUrl
    });

    res.status(200).json({
      success: true,
      sessionId,
      downloadUrl,
      filename,
      markdownLength: markdown.length
    });

  } catch (error) {
    console.error('Processing error:', error);
    
    updateProgress(sessionId, {
      status: 'error',
      message: error.message || 'An error occurred during processing',
      progress: 0
    });
    
    res.status(500).json({
      error: error.message || 'Failed to process PDF',
      sessionId
    });
  }
}