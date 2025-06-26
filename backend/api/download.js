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

  const { sessionId, filename } = req.query;

  if (!sessionId || !filename) {
    return res.status(400).json({ error: 'Missing sessionId or filename' });
  }

  // Get from temporary cache
  const cache = global.conversionCache || new Map();
  console.log('Download request for sessionId:', sessionId);
  console.log('Cache size:', cache.size);
  console.log('Cache keys:', Array.from(cache.keys()));
  
  const conversion = cache.get(sessionId);
  console.log('Conversion found:', !!conversion);

  if (!conversion) {
    console.log('Conversion not found in cache - this is likely due to serverless cold starts');
    console.log('Available query params:', req.query);
    
    // For serverless environments where global cache doesn't persist,
    // we need an alternative approach. For now, return a helpful error.
    return res.status(404).json({ 
      error: 'Conversion not found - serverless cache cleared. Please try converting again.',
      sessionId: sessionId,
      cacheSize: cache.size,
      availableKeys: Array.from(cache.keys())
    });
  }

  // Set headers for file download
  res.setHeader('Content-Type', 'text/markdown');
  res.setHeader('Content-Disposition', `attachment; filename="${conversion.filename}"`);
  res.setHeader('Cache-Control', 'no-cache');

  // Send the markdown content
  res.status(200).send(conversion.content);
}