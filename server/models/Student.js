const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true },
  phone: { type: String, required: true },
  college: String,
  course: String,
  position: String,
  resume: String,
  coverLetter: String,
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
