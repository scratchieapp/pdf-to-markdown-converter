import { getStripe } from '../_utils/stripe.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const stripe = getStripe();
    const { amount, fileName, pageCount, email } = req.body;

    if (!amount || amount < 50) { // Minimum 50 cents
      return res.status(400).json({ error: 'Invalid amount' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount in cents
      currency: 'usd',
      metadata: {
        fileName,
        pageCount: pageCount.toString(),
        email,
        service: 'pdf-to-markdown'
      },
      receipt_email: email,
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });

  } catch (error) {
    console.error('Payment intent creation error:', error);
    
    if (error.message === 'STRIPE_SECRET_KEY not configured') {
      return res.status(500).json({ error: 'Stripe not configured' });
    }
    
    res.status(500).json({
      error: 'Failed to create payment intent'
    });
  }
}