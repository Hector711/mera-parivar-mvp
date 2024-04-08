const express = require('express');
const router = express.Router();
const prisma = require('../../prisma');
const CC = require('currency-converter-lt'); //Para convertir las cantidades en EUR, GBP y USD a INR

router.post('/', async (req, res) => {
  try {
    const { name, email, Subscription_status } = req.body;

    await prisma.Benefactors.create({
      data: {
        name,
        email,
        Subscription_status,
        Donation_frequency: false,
        is_partner: false, // Predefined as false
        company_name: 'none', // Predefined as "none"
        company_role: 'none', // Predefined as "none"
        message: 'none', // Predefined as "none"
      },
    });

    res.status(201).json('Donation created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).json('Server error');
  }
});

module.exports = router;
