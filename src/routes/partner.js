const express = require('express');
const router = express.Router();
const prisma = require('../../prisma');

router.post('/', async (req, res) => {
  try {
    const {
      email,
      name,
      company_name,
      company_role,
      message,
      IDdonation_type,
    } = req.body;
    console.log(req.body);
    console.log('entra en la ruta');
    const parsedIDdonation_type = parseInt(IDdonation_type, 10);

    if (IDdonation_type !== '1') {
      await prisma.Benefactors.create({
        data: {
          email,
          name,
          Donation_frequency: false,
          Subscription_status: false,
          is_partner: true,
          company_name,
          company_role,
          message,
          Donations: {
            create: {
              Amount_in_rup: 0,
              IDmethod_pay: 0,
              IDdonation_type: parsedIDdonation_type,
            },
          },
        },
      });
    } else {
      await prisma.Benefactors.create({
        data: {
          email,
          name,
          Donation_frequency: false,
          Subscription_status: false,
          is_partner: true,
          company_name,
          company_role,
          message,
        },
      });
    }

    res.status(201).json('Register(s) created successfully');
  } catch (error) {
    console.error('Error al crear el benefactor y la donación: ', error);
    res.status(500).send('Ocurrió un error al procesar tu solicitud.');
  }
});

module.exports = router;
