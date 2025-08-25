const Student = require('../models/Student');

exports.createStudent = async (req, res, next) => {
  try {
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
    res.status(201).json({ success: true, message: 'Application submitted', data: student });
  } catch (err) {
    next(err);
  }
};
