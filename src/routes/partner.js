const express = require('express');
const router = express.Router();
const prisma = require('../../prisma');

router.post('/', async (req, res) => {
  try {
    const { name, email, company_name, company_role } = req.body;

    await prisma.Benefactors.create({
      data: {
        name,
        company_name,
        company_role,
        email,
        Subscription_status: false, //Predefined as false
        is_partner: true, // Predefined as true
      },
    });

    res.status(201).json('Partner created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).json('Server error');
  }
});

module.exports = router;
