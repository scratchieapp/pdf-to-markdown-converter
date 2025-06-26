import { verifyToken } from '../_utils/auth.js';
import { getUser, updateUser } from '../_utils/userStorage.js';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const userId = verifyToken(req.headers.authorization);
    const user = getUser(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.freeTrialUsed) {
      return res.status(400).json({ error: 'Free trial already used' });
    }

    updateUser(userId, { freeTrialUsed: true });

    res.status(200).json({ success: true });

  } catch (error) {
    const status = error.message === 'No token provided' ? 401 : 403;
    res.status(status).json({ error: error.message });
  }
}