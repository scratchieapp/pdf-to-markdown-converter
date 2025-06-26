module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const debugInfo = {
    currentUrl: req.headers.referer || 'Not provided',
    origin: req.headers.origin || 'Not provided',
    host: req.headers.host || 'Not provided',
    googleClientId: process.env.GOOGLE_CLIENT_ID ? 'Set' : 'Not set',
    jwtSecret: process.env.JWT_SECRET ? 'Set' : 'Not set',
    nodeEnv: process.env.NODE_ENV || 'Not set',
    vercelEnv: process.env.VERCEL_ENV || 'Not set',
    vercelUrl: process.env.VERCEL_URL || 'Not set',
    timestamp: new Date().toISOString()
  };
  
  res.status(200).json(debugInfo);
}