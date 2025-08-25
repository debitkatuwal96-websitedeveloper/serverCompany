require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');

// Routes
const studentRoutes = require('./routes/studentRoutes');
const clientRoutes = require('./routes/clientRoutes');

const app = express();
connectDB();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(morgan('dev'));

// Rate limiting (100 requests per 15 min)
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);

// API Routes
app.use('/api/students', studentRoutes);
app.use('/api/clients', clientRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
