import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { WebSocketServer } from 'ws';
import { createServer } from 'http';
import uploadRouter from './routes/upload.js';
import analyzeRouter from './routes/analyze.js';
import paymentRouter from './routes/payment.js';
import webhookRouter from './routes/webhook.js';
import authRouter from './routes/auth.js';
import { setupWebSocket } from './services/websocket.js';

dotenv.config();

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

const PORT = process.env.PORT || 3001;

app.use(cors());

// Webhook route needs raw body, so it comes before express.json()
app.use('/api/webhook', webhookRouter);

app.use(express.json());
app.use(express.static('public'));

setupWebSocket(wss);

app.use('/api', uploadRouter);
app.use('/api/analyze', analyzeRouter);
app.use('/api/payment', paymentRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.json({ 
    message: 'PDF to Markdown API', 
    endpoints: {
      upload: 'POST /api/upload',
      health: 'GET /health'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});