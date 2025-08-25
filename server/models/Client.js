const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  nameOrCompany: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true },
  phone: { type: String, required: true },
  serviceType: { type: String, required: true },
  budget: String,
  timeline: String,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model('Client', clientSchema);
