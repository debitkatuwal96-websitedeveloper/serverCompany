const { body } = require('express-validator');

// Student form validation
exports.validateStudent = [
  body('fullName').notEmpty().withMessage('Full name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').isLength({ min: 8 }).withMessage('Phone number must be valid'),
  body('position').notEmpty().withMessage('Position is required')
];

// Client form validation
exports.validateClient = [
  body('nameOrCompany').notEmpty().withMessage('Name/Company is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').notEmpty().withMessage('Phone number is required'),
  body('serviceType').notEmpty().withMessage('Service type is required'),
];
