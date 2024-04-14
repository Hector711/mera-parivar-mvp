const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const prisma = require('../../prisma');

// Ensure the raw body is used for webhook processing
router.post('/', express.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature'];
    console.log("Signature:", sig);
    console.log("Body:", req.body.toString());
    let event;
    try {
        // Construct the event using the Stripe library
        event = stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        console.error(`Webhook Error: ${err.message}`);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the specific event type
    if (event.type === 'payment_intent.succeeded') {
        const paymentIntent = event.data.object; // The payment intent object
        console.log('Payment Intent:', paymentIntent);
        const amount = paymentIntent.amount;
        const currency = paymentIntent.currency;
        const email = paymentIntent.receipt_email;
        const paymentMethodType = paymentIntent.payment_method_types[0];

        try {
            // Attempt to find the benefactor in the database
            const benefactor = await prisma.Benefactors.findUnique({
                where: { email: email }  // Assuming email is unique and correct
            });

            if (!benefactor) {
                console.error('No benefactor found for the email:', email);
                return res.status(404).send('No benefactor found');
            }

            // Determine the payment method ID based on the type
            let paymentMethodId;
            switch (paymentMethodType) {
                case 'card':
                    paymentMethodId = 3;
                    break;
                case 'google_pay':
                    paymentMethodId = 1;
                    break;
                default:
                    paymentMethodId = 2; // Assuming '2' is a default or catch-all ID
                    break;
            }

            // Create a new donation record in the database
            const new_donation = await prisma.Donations.create({
                data: {
                    Amount_in_rup: amount / 100,
                    IDBenefactor: benefactor.IDBenefactor,
                    IDmethod_pay: paymentMethodId,
                    IDdonation_type: 1,  // Assuming '1' is a default donation type
                }
            });

            console.log('New Donation:', new_donation);
            res.json({ received: true, message: 'Donation recorded successfully' });
        } catch (error) {
            console.error('Error processing donation:', error);
            res.status(500).send('Error processing donation');
        }
    } else {
        res.status(200).send(`Received unhandled event type: ${event.type}`);
    }
});

module.exports = router;
