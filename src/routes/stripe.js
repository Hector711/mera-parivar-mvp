const express = require('express');
const router = express.Router();

// Supongamos que estos son tus Payment Links, almacenados en un objeto
const paymentLinks = {

  EUR: 'https://donate.stripe.com/test_cN2dRidTk1LfakwaEH',

};

router.post('/', (req, res) => {
  const { currency } = req.body; // Asume que el cliente envía la moneda como 'currency'

  // Verifica si existe un Payment Link para la moneda proporcionada
  if (paymentLinks[currency]) {
    res.json({ url: paymentLinks[currency] });
  } else {
    res.status(404).send({ error: 'No payment link available for the selected currency.' });
  }
});

module.exports = router;


