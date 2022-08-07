const express = require('express');
const {register, login, getUser} = require("../controllers/auth-ctrl.js");
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/getuser', getUser);

module.exports = router;
