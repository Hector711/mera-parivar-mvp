const express = require('express');
const router = express.Router();
const prisma = require('../../prisma');

router.post('/', async (req, res) => {
  try {
    const { email, name, Subscription_status } = req.body;

    const subscriptionStatusBoolean = Subscription_status === 'true';

    await prisma.Benefactors.create({
      data: {
        email,
        name,
        Donation_frequency: false,
        Subscription_status: subscriptionStatusBoolean,
        is_partner: false,
        company_name: 'none',
        company_role: 'none',
        message: 'none',
      },
    });

    res.status(201).json('Register(s) created successfully');
  } catch (error) {
    console.error('Error al crear el benefactor: ', error);
    res.status(500).send('Ocurrió un error al procesar tu solicitud.');
  }
});

module.exports = router;
