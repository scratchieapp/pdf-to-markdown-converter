import { PDFDocument } from 'pdf-lib';
import { callMistralOCR } from './mistralOCR.js';

export async function processPDF(pdfBuffer, progressCallback = null) {
  try {
    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const totalPages = pdfDoc.getPageCount();
    const chunkSize = parseInt(process.env.CHUNK_SIZE) || 50;
    
    console.log(`Processing PDF with ${totalPages} pages`);
    
    const chunks = [];
    const results = [];
    
    for (let i = 0; i < totalPages; i += chunkSize) {
      const start = i;
      const end = Math.min(i + chunkSize, totalPages);
      chunks.push({ start, end });
    }
    
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      const ocrProgress = Math.floor((i / chunks.length) * 70); // OCR takes 70% of total progress
      
      if (progressCallback) {
        progressCallback({
          status: 'processing',
          message: `OCR Processing: ${chunk.start + 1}-${chunk.end} (${i + 1}/${chunks.length} chunks)`,
          progress: ocrProgress,
          currentPage: chunk.start + 1,
          totalPages,
        });
      }
      
      const chunkPdf = await PDFDocument.create();
      
      for (let j = chunk.start; j < chunk.end; j++) {
        const [copiedPage] = await chunkPdf.copyPages(pdfDoc, [j]);
        chunkPdf.addPage(copiedPage);
      }
      
      const chunkBuffer = await chunkPdf.save();
      
      try {
        const ocrResult = await callMistralOCR(chunkBuffer, `pages_${chunk.start}-${chunk.end}`);
        results.push({
          pageRange: [chunk.start, chunk.end],
          content: ocrResult
        });
      } catch (error) {
        console.error(`Error processing chunk ${i}:`, error);
        throw new Error(`Failed to process pages ${chunk.start + 1} to ${chunk.end}`);
      }
    }
    
    return results;
  } catch (error) {
    console.error('PDF processing error:', error);
    throw error;
  }
}