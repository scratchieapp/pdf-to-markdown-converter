const jwt = require('jsonwebtoken');
const { getUser, updateUser } = require('./userStorage');

module.exports = async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No valid token provided' });
    }

    const token = authHeader.substring(7);
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    const user = getUser(decoded.userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.freeTrialUsed) {
      return res.status(400).json({ error: 'Free trial already used' });
    }

    updateUser(decoded.userId, { freeTrialUsed: true });

    res.status(200).json({ success: true });

  } catch (error) {
    console.error('Use free trial error:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
}