import { getStripe } from '../_utils/stripe.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const stripe = getStripe();
    const { paymentIntentId } = req.query;

    if (!paymentIntentId) {
      return res.status(400).json({ error: 'Payment intent ID required' });
    }
    
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    
    res.status(200).json({
      status: paymentIntent.status,
      metadata: paymentIntent.metadata,
    });

  } catch (error) {
    console.error('Payment status error:', error);
    
    if (error.message === 'STRIPE_SECRET_KEY not configured') {
      return res.status(500).json({ error: 'Stripe not configured' });
    }
    
    res.status(500).json({
      error: 'Failed to retrieve payment status'
    });
  }
}