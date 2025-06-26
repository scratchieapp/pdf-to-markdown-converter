module.exports = async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  res.status(200).json({
    success: true,
    message: 'OCR endpoint is accessible',
    method: req.method,
    timestamp: new Date().toISOString(),
    cacheStatus: {
      pdfCache: global.pdfCache ? `${global.pdfCache.size} items` : 'Not initialized',
      conversionCache: global.conversionCache ? `${global.conversionCache.size} items` : 'Not initialized'
    }
  });
}