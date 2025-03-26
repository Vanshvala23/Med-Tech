const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Vansh:MedTech%40Vansh@cluster0.rq5e5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❗ Database connection failed:', error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
