const express = require('express');
const router = express.Router();

const accountControllers = require('../app/controllers/AccountControllers');

router.get('/login', accountControllers.login);
router.get('/register', accountControllers.register);
router.post('/regist', accountControllers.regist);

module.exports = router;