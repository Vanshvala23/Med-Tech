const Medicines = require('../models/Medicine');

exports.addMedicine = async (req, res) => {
    try {
        const { name, brand, company, quantity, price } = req.body;
        const medicine = new Medicines({
            name,
            brand,
            company,
            quantity,
            price
        });
        await medicine.save();
        res.status(201).json({ message: 'Medicine added successfully', medicine });
    } catch (error) {
        res.status(500).json({ message: 'Error adding medicine', error });
    }
};
exports.getAllMedicines = async (req, res) => {
    try {
        const medicines = await Medicines.find();
        res.status(200).json({ message: 'Medicines retrieved successfully', medicines });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving medicines', error });
    }
};
exports.getMedicineById = async (req, res) => {
    try {
        const medicine = await Medicines.findById(req.params.id);
        if (!medicine) {
            return res.status(404).json({ message: 'Medicine not found' });
        }
        res.status(200).json({ message: 'Medicine retrieved successfully', medicine });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving medicine', error });
    }
};
exports.updateMedicine = async (req, res) => {
    try {
        const { name, brand, company, quantity, price } = req.body;
        const medicine = await Medicines.findByIdAndUpdate(req.params.id, {
            name,
            brand,
            company,
            quantity,
            price
        }, { new: true });
        if (!medicine) {
            return res.status(404).json({ message: 'Medicine not found' });
        }
        res.status(200).json({ message: 'Medicine updated successfully', medicine });
    } catch (error) {
        res.status(500).json({ message: 'Error updating medicine', error });
    }
};
exports.deleteMedicine = async (req, res) => {
    try {
      const medicine = await Medicines.findByIdAndDelete(req.params.id);
      if (!medicine) {
        return res.status(404).json({ message: 'Medicine not found' });
      }
      res.status(200).json({ message: 'Medicine deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };