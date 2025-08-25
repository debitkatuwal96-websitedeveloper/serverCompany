// const express = require('express');
// const router = express.Router();
// const { createStudent } = require('../controllers/studentController');
// const upload = require('../middleware/upload');

// router.post('/', upload.single('resume'), createStudent);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { createStudent } = require('../controllers/studentController');
const upload = require('../middleware/upload');
const { validateStudent } = require('../middleware/validate');
const { validationResult } = require('express-validator');

router.post('/', upload.single('resume'), validateStudent, async (req, res, next) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }
    
    // Call the controller function
    await createStudent(req, res, next);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

