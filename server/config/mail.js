const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_PASSWORD,
  },
});

module.exports = transporter;