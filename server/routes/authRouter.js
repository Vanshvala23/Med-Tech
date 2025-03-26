const express = require('express');
const {RegisterWithEmailPassword,LoginWithGoogle,LoginWithEmailPassword}=require('../firebase/auth')
const router = express.Router();

// Registration using Email and Password
router.post('/register', RegisterWithEmailPassword);

// Login using Email and Password
router.post('/login',LoginWithEmailPassword);

// Login using Google
router.post('/google-login', LoginWithGoogle);

module.exports = router;
