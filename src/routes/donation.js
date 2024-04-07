const express = require('express');
const router = express.Router();
const CC = require('currency-converter-lt'); //Para convertir las cantidades en EUR, GBP y USD a INR

router.get('/', (req, res) => {
  res.json({ message: 'Donation' });
});

router.post('/donation', async (req, res) => {
  try {
    const { name, email, Subscription_status, amount, currency } = req.body;

    // Convertir a INR si la moneda no es INR
    if (currency !== 'INR') {
      let currencyConverter = new CC();

      try {
        const conversionRate = await currencyConverter
          .from(currency)
          .to('INR')
          .convert(amount);
        Amount_in_rup = conversionRate;
      } catch (conversionError) {
        console.error(conversionError);
        return res.status(500).json('Error converting currency');
      }
    } else {
      Amount_in_rup = amount;
    }

    const benefactor = await prisma.Benefactors.create({
      data: {
        name,
        email,
        Subscription_status,
        is_partner: false, // Predefined as false
        company_name: 'none', // Predefined as "none"
        company_role: 'none', // Predefined as "none"
      },
    });

    console.log(benefactor.id); // This will log the ID of the newly created benefactor

    await prisma.Donations.create({
      data: {
        IDBenefactor: benefactor.id, // Link the donation to the created benefactor
        IDmethod_pay,
        IDdonation_type: 1, // Predefined donation type as 1 (Dinero)
        Amount_in_rup,
      },
    });

    res.status(201).json('Donation created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).json('Server error');
  }
});

module.exports = router;
