const express = require('express');
const router = express.Router();
const medicineController=require('../controller/medicineController');

router.post('/', medicineController.addMedicine);
router.get('/', medicineController.getAllMedicines);
router.get('/:id', medicineController.getMedicineById);
router.put('/:id', medicineController.updateMedicine);
router.delete('/:id', medicineController.deleteMedicine);
module.exports = router;