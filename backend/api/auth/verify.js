const jwt = require('jsonwebtoken');

// In-memory user storage (same as google.js - replace with database in production)
const users = new Map();

const getUser = (userId) => users.get(userId);

module.exports = async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
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
      return res.status(401).json({ error: 'User not found' });
    }

    res.status(200).json({
      id: user.id,
      email: user.email,
      name: user.name,
      picture: user.picture,
      freeTrialUsed: user.freeTrialUsed,
    });

  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
}