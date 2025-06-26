// Simple progress tracking for polling (replaces WebSocket)
const progressCache = new Map();

function updateProgress(sessionId, progressData) {
  progressCache.set(sessionId, {
    ...progressData,
    timestamp: new Date(),
  });
}

function getProgress(sessionId) {
  return progressCache.get(sessionId);
}

module.exports = async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

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

// Export the functions for use in other modules
module.exports.updateProgress = updateProgress;
module.exports.getProgress = getProgress;