import { handleCors } from './_utils/cors.js';

export default function handler(req, res) {
  const corsResult = handleCors(req, res, ['GET']);
  if (corsResult) return corsResult;
  
  res.status(200).json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'pdf-to-markdown-api',
    environment: process.env.NODE_ENV || 'development'
  });
}