const express = require('express');
const router = express.Router();
const prisma = require('../../prisma');

// Supongamos que estos son tus Payment Links, almacenados en un objeto
const paymentLinks = {
  INR: 'https://donate.stripe.com/test_eVaaF66qSdtX8co5ko',
  EUR: 'https://donate.stripe.com/test_cN2dRidTk1LfakwaEH',
  GBP: 'https://donate.stripe.com/test_bIY8wY5mO61v64g9AG',
  USD: 'https://donate.stripe.com/test_3csbJabLcahLcsE7sx',
};

router.post('/', async (req, res) => {
  const { currency, name, email, Subscription_status } = req.body;

  const subscriptionStatusBoolean = Subscription_status === 'true';
  // Crear un nuevo registro de benefactor
  let benefactor = await prisma.Benefactors.findUnique({
    where: { email: email },
  });

  // Si no existe, crea un nuevo benefactor
  if (!benefactor) {
    benefactor = await prisma.Benefactors.create({
      data: {
        email: email,
        name: name,
        Subscription_status: subscriptionStatusBoolean,
        Donation_frequency: false,
        is_partner: false,
        company_name: 'none',
        company_role: 'none',
        message: 'none',
      },
    });
  }
  console.log(benefactor);
  // Verifica si existe un Payment Link para la moneda proporcionada
  if (paymentLinks[currency]) {
    res.json({ url: paymentLinks[currency] });
  } else {
    res
      .status(404)
      .send({ error: 'No payment link available for the selected currency.' });
  }
});

module.exports = router;
