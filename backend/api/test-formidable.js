module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  try {
    // Test different ways to import formidable
    let formidable;
    
    try {
      formidable = require('formidable').default || require('formidable');
      res.status(200).json({ 
        success: true, 
        method: 'default-fallback',
        isFunction: typeof formidable === 'function',
        type: typeof formidable
      });
    } catch (e1) {
      try {
        formidable = require('formidable');
        res.status(200).json({ 
          success: true, 
          method: 'direct-require',
          isFunction: typeof formidable === 'function',
          type: typeof formidable,
          hasDefault: !!formidable.default
        });
      } catch (e2) {
        res.status(500).json({ 
          error: 'Failed to import formidable',
          error1: e1.message,
          error2: e2.message
        });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}