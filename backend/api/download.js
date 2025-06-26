export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { sessionId, filename } = req.query;

  if (!sessionId || !filename) {
    return res.status(400).json({ error: 'Missing sessionId or filename' });
  }

  // Get from temporary cache
  const cache = global.conversionCache || new Map();
  const conversion = cache.get(sessionId);

  if (!conversion) {
    return res.status(404).json({ error: 'Conversion not found or expired' });
  }

  // Set headers for file download
  res.setHeader('Content-Type', 'text/markdown');
  res.setHeader('Content-Disposition', `attachment; filename="${conversion.filename}"`);
  res.setHeader('Cache-Control', 'no-cache');

  // Send the markdown content
  res.status(200).send(conversion.content);
}