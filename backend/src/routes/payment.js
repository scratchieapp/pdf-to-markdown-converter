import express from 'express';
import Stripe from 'stripe';

const router = express.Router();

// Initialize Stripe with error handling
let stripe;
try {
  if (process.env.STRIPE_SECRET_KEY) {
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  } else {
    console.warn('Warning: STRIPE_SECRET_KEY not found in environment variables');
  }
} catch (error) {
  console.error('Failed to initialize Stripe:', error);
}

// Create payment intent
router.post('/create-intent', async (req, res) => {
  try {
    if (!stripe) {
      return res.status(500).json({ error: 'Stripe not configured' });
    }

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

    res.json({
      clientSecret: paymentIntent.client_secret,
    });

  } catch (error) {
    console.error('Payment intent creation error:', error);
    res.status(500).json({
      error: 'Failed to create payment intent'
    });
  }
});

// Get payment status
router.get('/status/:paymentIntentId', async (req, res) => {
  try {
    if (!stripe) {
      return res.status(500).json({ error: 'Stripe not configured' });
    }

    const { paymentIntentId } = req.params;
    
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    
    res.json({
      status: paymentIntent.status,
      metadata: paymentIntent.metadata,
    });
  } catch (error) {
    console.error('Payment status error:', error);
    res.status(500).json({
      error: 'Failed to retrieve payment status'
    });
  }
});

export default router;