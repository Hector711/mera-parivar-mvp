const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const prisma = require('../../prisma');

router.post('/', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET,
      );
    } catch (err) {
      console.error(`Webhook Error: ${err.message}`);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object;
      console.log('payment intent', paymentIntent);
      const amount = paymentIntent.amount;
      const currency = paymentIntent.currency;
      const email = paymentIntent.receipt_email;
      const paymentMethodType = paymentIntent.payment_method_types[0];

      try {
        const benefactor = await prisma.Benefactors.findUnique({
          where: { email: 'cris@test.com' },
        });

        if (!benefactor) {
          console.error('No benefactor found for the email:', email);
          return res.status(404).send('No benefactor found');
        }

        let paymentMethodId;
        if (paymentMethodType === 'card') {
          paymentMethodId = 3;
        } else if (paymentMethodType === 'google_pay') {
          paymentMethodId = 1;
        } else {
          paymentMethodId = 2;
        }

        const new_donation = await prisma.Donations.create({
          data: {
            Amount_in_rup: amount,
            IDBenefactor: benefactor.IDBenefactor,
            IDmethod_pay: paymentMethodId,
            IDdonation_type: 1,
          },
        });

        console.log(new_donation);
        console.log('Donation recorded successfully');
        res.json({ received: true, message: 'Donation recorded successfully' });
      } catch (error) {
        console.error('Error processing donation:', error);
        res.status(500).send('Error processing donation');
      }
    } else {
      å;
      res.status(200).send(`Received unhandled event type: ${event.type}`);
    }
  },
);

module.exports = router;
