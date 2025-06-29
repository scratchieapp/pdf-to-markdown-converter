const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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

  try {
    const { amount, fileName, pageCount, email } = req.body;

    if (!amount || amount < 50) { // Minimum 50 cents
      return res.status(400).json({ error: 'Invalid amount' });
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('STRIPE_SECRET_KEY not configured');
      return res.status(500).json({ error: 'Payment system not configured' });
    }

    console.log('Creating payment intent:', { amount, fileName, pageCount, email });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount in cents
      currency: 'usd',
      metadata: {
        fileName,
        pageCount: pageCount.toString(),
        email,
        service: 'pdf-to-markdown'
      },
      description: `PDF to Markdown conversion: ${fileName} (${pageCount} pages)`,
      receipt_email: email,
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });

  } catch (error) {
    console.error('Payment intent creation error:', error);
    
    res.status(500).json({
      error: 'Failed to create payment intent',
      details: error.message
    });
  }
}