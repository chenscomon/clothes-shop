const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/', authController.authUsers);

router.get('/', authController.getTest);

module.exports = router;