const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Contact' });
});

router.post('/', async (req, res) => {
  try {
    const { contact_name, contact_email, IDSubject_type, Text } = req.body;

    await prisma.contact_form.create({
      data: {
        contact_name,
        contact_email,
        IDSubject_type,
        Text,
      },
    });

    res.status(201).json('Contact form created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).json('Server error');
  }
});

module.exports = router;
