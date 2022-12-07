const express = require('express');
const router = express.Router();

const wifiControllers = require('../app/controllers/WifiControllers');

router.get('/', wifiControllers.index);

module.exports = router;