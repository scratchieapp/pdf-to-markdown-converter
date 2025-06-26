// Simple progress tracking for polling (replaces WebSocket)
const progressCache = new Map();

export function updateProgress(sessionId, progressData) {
  progressCache.set(sessionId, {
    ...progressData,
    timestamp: new Date(),
  });
}

export function getProgress(sessionId) {
  return progressCache.get(sessionId);
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { sessionId } = req.query;

  if (!sessionId) {
    return res.status(400).json({ error: 'Missing sessionId' });
  }

  const progress = getProgress(sessionId);

  if (!progress) {
    return res.status(200).json({
      status: 'idle',
      message: 'No progress found',
      progress: 0
    });
  }

  res.status(200).json(progress);
}