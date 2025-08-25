// const express = require('express');
// const router = express.Router();
// const { createClient } = require('../controllers/clientController');

// router.post('/', createClient);

// module.exports = router;


const express = require('express');
const router = express.Router();
const { createClient } = require('../controllers/clientController');
const { validateClient } = require('../middleware/validate');
const { validationResult } = require('express-validator');

router.post('/', validateClient, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  createClient(req, res, next);
});

module.exports = router;
