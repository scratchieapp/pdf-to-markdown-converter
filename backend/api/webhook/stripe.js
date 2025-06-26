const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!endpointSecret) {
      console.error('STRIPE_WEBHOOK_SECRET not configured');
      return res.status(500).json({ error: 'Webhook not configured' });
    }

    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log('✅ Payment succeeded:', paymentIntent.id, 'Amount:', paymentIntent.amount_received / 100);
        console.log('Payment metadata:', paymentIntent.metadata);
        break;

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        console.log('❌ Payment failed:', failedPayment.id);
        break;

      case 'charge.dispute.created':
        const dispute = event.data.object;
        console.log('⚠️ Dispute created:', dispute.id, 'Amount:', dispute.amount / 100);
        break;

      case 'refund.created':
        const refund = event.data.object;
        console.log('💰 Automatic refund issued:', refund.id, 'Amount:', refund.amount / 100, 'Reason:', refund.reason);
        console.log('Payment Intent:', refund.payment_intent);
        break;

      case 'refund.failed':
        const failedRefund = event.data.object;
        console.log('❌ Refund failed:', failedRefund.id, 'Payment Intent:', failedRefund.payment_intent);
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200).json({ received: true });

  } catch (error) {
    console.error('Webhook handler error:', error);
    res.status(500).json({ error: 'Webhook handler failed' });
  }
}