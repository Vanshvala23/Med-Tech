const express = require('express');
const router = express.Router();
const {generateQRCode}=require('../controller/medicineController');

router.get('/generateQRCode/:medicineId',generateQRCode);
module.exports = router;