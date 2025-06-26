export default function handler(req, res) {
  res.status(200).json({ 
    message: 'PDF to Markdown API', 
    endpoints: {
      analyze: 'POST /api/analyze',
      upload: 'POST /api/upload',
      auth: 'POST /api/auth/google',
      payment: 'POST /api/payment/create-intent',
      webhook: 'POST /api/webhook/stripe',
      health: 'GET /api/health'
    }
  });
}