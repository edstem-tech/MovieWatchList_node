const express = require('express');
const router = express.Router();
const newController = require('../controller/register');

router.post('/register', newController.register)
router.post('/login', newController.login)

module.exports = router;