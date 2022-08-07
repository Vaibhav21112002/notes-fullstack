const express = require('express');
const {register, login, getUser} = require("../controllers/auth-ctrl.js");
const router = express.Router();
const fetchUser = require("../middleware/login");

router.post('/register', register);
router.post('/login', login);
router.post('/getuser',fetchUser, getUser);

module.exports = router;
