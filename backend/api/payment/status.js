const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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

  try {
    const { paymentIntentId } = req.query;

    if (!paymentIntentId) {
      return res.status(400).json({ error: 'Payment intent ID required' });
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('STRIPE_SECRET_KEY not configured');
      return res.status(500).json({ error: 'Payment system not configured' });
    }
    
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    
    res.status(200).json({
      status: paymentIntent.status,
      metadata: paymentIntent.metadata,
    });

  } catch (error) {
    console.error('Payment status error:', error);
    
    res.status(500).json({
      error: 'Failed to retrieve payment status',
      details: error.message
    });
  }
}