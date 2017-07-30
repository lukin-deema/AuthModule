const express = require('express');
const router = express.Router();

router.use('/users', require('./users/route'));
router.use('/nodes', require('./nodes/route'));

module.exports = router;