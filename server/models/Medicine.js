const mongoose = require('mongoose');
const medicineSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      brand: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        default: 'N/A',
      },
      price: {
        type: String,
        required: true,
      },
},{timestamps:true});
module.exports=mongoose.model('Medicines',medicineSchema);