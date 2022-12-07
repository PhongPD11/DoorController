const express = require('express');
const router = express.Router();

const settingControllers = require('../app/controllers/SettingControllers');


router.get('/', settingControllers.index);

module.exports = router;

