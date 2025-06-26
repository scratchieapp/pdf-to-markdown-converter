import { PDFDocument } from 'pdf-lib';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Handle multipart form data in Vercel
    const contentType = req.headers['content-type'];
    if (!contentType || !contentType.includes('multipart/form-data')) {
      return res.status(400).json({ error: 'Must use multipart/form-data' });
    }

    // For Vercel, we'll use a simpler approach with body parsing
    // In a real deployment, you'd want to use a proper multipart parser
    const body = req.body;
    
    if (!body || !body.pdf) {
      return res.status(400).json({ error: 'No PDF file found in request' });
    }

    // Assuming the PDF comes as base64 or buffer
    let pdfBuffer;
    if (typeof body.pdf === 'string') {
      // If base64 encoded
      pdfBuffer = Buffer.from(body.pdf, 'base64');
    } else {
      pdfBuffer = body.pdf;
    }

    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const pageCount = pdfDoc.getPageCount();
    const fileSize = pdfBuffer.length;
    const fileName = body.fileName || 'document.pdf';

    // Determine pricing and flow
    const isFreeEligible = pageCount <= 10;
    const price = isFreeEligible ? 0 : 5;

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