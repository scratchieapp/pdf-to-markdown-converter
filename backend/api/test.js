module.exports = function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const testData = {
    message: 'API is working!',
    method: req.method,
    timestamp: new Date().toISOString(),
    headers: Object.fromEntries(
      Object.entries(req.headers).filter(([key]) => 
        ['user-agent', 'accept', 'content-type', 'origin'].includes(key.toLowerCase())
      )
    ),
    environment: {
      NODE_ENV: process.env.NODE_ENV,
      MISTRAL_API_KEY: process.env.MISTRAL_API_KEY ? 'Set' : 'Not set',
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY ? 'Set' : 'Not set',
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID ? 'Set' : 'Not set',
    }
  };

  if (req.method === 'POST') {
    testData.body = req.body;
  }

  res.status(200).json(testData);
}