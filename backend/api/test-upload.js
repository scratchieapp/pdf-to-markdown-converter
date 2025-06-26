module.exports = async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('Test upload endpoint hit');
  console.log('Headers:', req.headers);
  console.log('Body type:', typeof req.body);
  console.log('Content-Type:', req.headers['content-type']);
  
  // Return immediate success for testing
  res.status(200).json({
    success: true,
    message: 'Test upload endpoint working',
    timestamp: new Date().toISOString(),
    headers: {
      'content-type': req.headers['content-type'],
      'content-length': req.headers['content-length']
    }
  });
}