// const errorHandler = (err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ success: false, message: err.message });
// };
// module.exports = errorHandler;

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  // Mongoose duplicate key error
  if (err.code === 11000) {
    const message = 'Email already exists';
    return res.status(400).json({ 
      success: false, 
      message 
    });
  }
  
  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(val => val.message);
    return res.status(400).json({ 
      success: false, 
      message: messages.join(', ') 
    });
  }

  res.status(500).json({ 
    success: false, 
    message: err.message || 'Server Error' 
  });
};

module.exports = errorHandler;