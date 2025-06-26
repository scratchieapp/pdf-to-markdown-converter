import { verifyToken } from '../_utils/auth.js';
import { getUser } from '../_utils/userStorage.js';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const userId = verifyToken(req.headers.authorization);
    const user = getUser(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({
      id: user.id,
      email: user.email,
      name: user.name,
      picture: user.picture,
      freeTrialUsed: user.freeTrialUsed,
    });

  } catch (error) {
    const status = error.message === 'No token provided' ? 401 : 403;
    res.status(status).json({ error: error.message });
  }
}