import express from 'express';
import multer from 'multer';
import { PDFDocument } from 'pdf-lib';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE) || 52428800 // 50MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'), false);
    }
  }
});

router.post('/pdf', upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const pdfDoc = await PDFDocument.load(req.file.buffer);
    const pageCount = pdfDoc.getPageCount();
    const fileSize = req.file.size;
    const fileName = req.file.originalname;

    // Determine pricing and flow
    const isFreeEligible = pageCount <= 10;
    const price = isFreeEligible ? 0 : 5;

    res.json({
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
});

export default router;