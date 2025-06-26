import express from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { processPDF } from '../services/pdfProcessor.js';
import { convertToMarkdown } from '../services/markdownConverter.js';
import { broadcastProgress } from '../services/websocket.js';
import path from 'path';
import fs from 'fs/promises';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE) || 52428800
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'), false);
    }
  }
});

router.post('/upload', upload.single('pdf'), async (req, res) => {
  const sessionId = req.body.sessionId || uuidv4();
  
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    broadcastProgress(sessionId, {
      status: 'processing',
      message: 'Starting PDF processing...',
      progress: 0
    });

    const ocrResult = await processPDF(req.file.buffer, sessionId);
    
    broadcastProgress(sessionId, {
      status: 'converting',
      message: 'Converting OCR results to Markdown...',
      progress: 75,
      substatus: {
        task: 'Markdown Conversion',
        current: 1,
        total: 1,
        taskProgress: 0
      }
    });

    const markdown = await convertToMarkdown(ocrResult, sessionId);
    
    broadcastProgress(sessionId, {
      status: 'converting',
      message: 'Saving Markdown file...',
      progress: 95,
      substatus: {
        task: 'Markdown Conversion',
        current: 1,
        total: 1,
        taskProgress: 100
      }
    });
    
    // Create filename from original PDF name + suffix
    const originalName = req.file.originalname;
    const nameWithoutExt = path.parse(originalName).name;
    const firstTenChars = nameWithoutExt.substring(0, 10);
    const filename = `${firstTenChars}_converted.md`;
    const filepath = path.join(process.cwd(), 'public', 'downloads', filename);
    
    await fs.mkdir(path.dirname(filepath), { recursive: true });
    await fs.writeFile(filepath, markdown);

    broadcastProgress(sessionId, {
      status: 'complete',
      message: 'Conversion complete!',
      progress: 100,
      downloadUrl: `/downloads/${filename}`
    });

    res.json({
      success: true,
      sessionId,
      downloadUrl: `/downloads/${filename}`
    });

  } catch (error) {
    console.error('Processing error:', error);
    
    broadcastProgress(sessionId, {
      status: 'error',
      message: error.message || 'An error occurred during processing',
      progress: 0
    });

    res.status(500).json({
      error: error.message || 'Failed to process PDF'
    });
  }
});

export default router;