const express = require('express');
const router = express.Router();

router.use('/contact', require('./contact'));
router.use('/partner', require('./partner'));
router.use('/nonpartner', require('./nonpartner'));
router.use('/donation', require('./donation'));

module.exports = router;
