const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema({
	name: { type: String, required: true },
	address: { type: String, required: true },
	town: { type: String, required: true },
    phoneNumber:{type: String, required: true},
    dateUpdated: { type: String, required: true },
	inStock: Boolean,
}, { timestamps: true });



const Pharmacy = mongoose.model('Pharmacy', pharmacySchema);

module.exports = Pharmacy;