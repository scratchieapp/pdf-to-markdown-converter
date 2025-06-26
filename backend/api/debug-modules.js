module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const modules = {
    formidable: { exists: false, details: {} },
    'pdf-lib': { exists: false, details: {} },
    'uuid': { exists: false, details: {} },
    'jsonwebtoken': { exists: false, details: {} }
  };
  
  // Check formidable
  try {
    const f = require('formidable');
    modules.formidable.exists = true;
    modules.formidable.details = {
      type: typeof f,
      hasDefault: !!f.default,
      isFunction: typeof f === 'function',
      keys: Object.keys(f).slice(0, 10)
    };
  } catch (e) {
    modules.formidable.error = e.message;
  }
  
  // Check pdf-lib
  try {
    const p = require('pdf-lib');
    modules['pdf-lib'].exists = true;
    modules['pdf-lib'].details = {
      hasPDFDocument: !!p.PDFDocument,
      keys: Object.keys(p).slice(0, 10)
    };
  } catch (e) {
    modules['pdf-lib'].error = e.message;
  }
  
  // Check uuid
  try {
    const u = require('uuid');
    modules.uuid.exists = true;
    modules.uuid.details = {
      hasV4: !!u.v4,
      keys: Object.keys(u).slice(0, 10)
    };
  } catch (e) {
    modules.uuid.error = e.message;
  }
  
  // Check jsonwebtoken
  try {
    const j = require('jsonwebtoken');
    modules.jsonwebtoken.exists = true;
    modules.jsonwebtoken.details = {
      type: typeof j,
      hasSign: !!j.sign,
      hasVerify: !!j.verify
    };
  } catch (e) {
    modules.jsonwebtoken.error = e.message;
  }
  
  res.status(200).json({
    success: true,
    nodeVersion: process.version,
    platform: process.platform,
    modules
  });
}