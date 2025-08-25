const Client = require('../models/Client');

exports.createClient = async (req, res, next) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json({ success: true, message: 'Inquiry submitted', data: client });
  } catch (err) {
    next(err);
  }
};
