// const Student = require('../models/Student');

// exports.createStudent = async (req, res, next) => {
//   try {
//     const student = await Student.create({
//       fullName: req.body.fullName,
//       email: req.body.email,
//       phone: req.body.phone,
//       college: req.body.college,
//       course: req.body.course,
//       position: req.body.position,
//       resume: req.file ? req.file.filename : '',
//       coverLetter: req.body.coverLetter
//     });
//     res.status(201).json({ success: true, message: 'Application submitted', data: student });
//   } catch (err) {
//     next(err);
//   }
// };

const Student = require('../models/Student');
const { validationResult } = require('express-validator');

exports.createStudent = async (req, res, next) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const student = await Student.create({
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      college: req.body.college,
      course: req.body.course,
      position: req.body.position,
      resume: req.file ? req.file.filename : '',
      coverLetter: req.body.coverLetter
    });
    
    res.status(201).json({ 
      success: true, 
      message: 'Application submitted', 
      data: student 
    });
  } catch (err) {
    next(err);
  }
};
