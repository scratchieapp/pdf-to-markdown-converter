const axios = require('axios');

const MISTRAL_OCR_URL = 'https://api.mistral.ai/v1/ocr';

async function callMistralOCR(pdfBuffer, filename) {
  try {
    // Create a data URL for the PDF
    const base64Document = Buffer.from(pdfBuffer).toString('base64');
    console.log(`Base64 preview (first 100 chars): ${base64Document.substring(0, 100)}`);
    const dataUrl = `data:application/pdf;base64,${base64Document}`;
    
    const response = await axios.post(
      MISTRAL_OCR_URL,
      {
        model: 'mistral-ocr-latest',
        document: {
          type: 'document_url',
          document_url: dataUrl
        },
        include_image_base64: false
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`,
          'Content-Type': 'application/json'
        },
        timeout: 60000
      }
    );

    console.log(`OCR completed for ${filename}`);
    console.log('Mistral OCR response structure:', JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error('Mistral OCR error details:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data?.detail || error.response?.data,
      message: error.message
    });
    
    if (error.response?.status === 401) {
      throw new Error('Invalid API key. Please check your Mistral API key.');
    } else if (error.response?.status === 422) {
      throw new Error('Invalid request format. The PDF may be corrupted or too large.');
    }
    
    throw new Error(`OCR failed: ${error.response?.data?.error?.message || error.response?.data?.message || error.message}`);
  }
}

module.exports = {
  callMistralOCR
};