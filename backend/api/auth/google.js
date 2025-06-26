const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Import shared user storage
const { getUser, createUser } = require('./userStorage');

const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '7d' }
  );
};

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
    console.log('Google auth request received:', {
      method: req.method,
      headers: req.headers['content-type'],
      bodyKeys: Object.keys(req.body || {}),
      googleClientId: process.env.GOOGLE_CLIENT_ID ? 'Set' : 'Not set'
    });

    const { credential } = req.body;

    if (!credential) {
      console.error('No credential in request body:', req.body);
      return res.status(400).json({ error: 'No credential provided' });
    }

    // Verify the Google ID token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload) {
      return res.status(400).json({ error: 'Invalid token payload' });
    }

    const { sub: googleId, email, name, picture } = payload;

    // Check if user exists, create if not
    let user = getUser(googleId);
    if (!user) {
      user = createUser(googleId, { email, name, picture });
    }

    // Generate JWT token
    const token = generateToken(googleId);

    res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        picture: user.picture,
        freeTrialUsed: user.freeTrialUsed,
      },
      token,
    });

  } catch (error) {
    console.error('Google auth error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    res.status(500).json({ 
      error: 'Authentication failed',
      details: error.message 
    });
  }
}