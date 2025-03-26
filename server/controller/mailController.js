const User=require('../models/User');
const transporter = require('../config/mail');
exports.registerMail = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const newUser = new User({ name, email, password, role });
        await newUser.save();
    
        const mailOptions = {
          from: 'your-email@gmail.com',
          to: email,
          subject: 'Welcome to MedLink Plus!',
          text: `Hello ${name}, thank you for joining MedLink Plus!`,
        };
    
        await transporter.sendMail(mailOptions);
        res.status(201).json({ message: 'User registered and email sent' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};
