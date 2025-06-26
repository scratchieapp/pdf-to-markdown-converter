import express from 'express';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// In-memory user storage (replace with database in production)
const users = new Map();

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid token' });
  }
};

// Google OAuth login
router.post('/google', async (req, res) => {
  try {
    const { credential } = req.body;

    if (!credential) {
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
    let user = users.get(googleId);
    if (!user) {
      user = {
        id: googleId,
        email,
        name,
        picture,
        freeTrialUsed: false,
        conversions: [],
        createdAt: new Date(),
      };
      users.set(googleId, user);
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: googleId },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    res.json({
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
    console.error('Google auth error:', error);
    res.status(500).json({ error: 'Authentication failed' });
  }
});

// Verify existing token
router.get('/verify', verifyToken, (req, res) => {
  const user = users.get(req.userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json({
    id: user.id,
    email: user.email,
    name: user.name,
    picture: user.picture,
    freeTrialUsed: user.freeTrialUsed,
  });
});

// Check free trial status
router.get('/free-trial-status', verifyToken, (req, res) => {
  const user = users.get(req.userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json({
    canUseTrial: !user.freeTrialUsed,
    freeTrialUsed: user.freeTrialUsed,
  });
});

// Mark free trial as used
router.post('/use-free-trial', verifyToken, (req, res) => {
  const user = users.get(req.userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (user.freeTrialUsed) {
    return res.status(400).json({ error: 'Free trial already used' });
  }

  user.freeTrialUsed = true;
  users.set(req.userId, user);

  res.json({ success: true });
});

export default router;