require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const sidebarRoutes = require('./src/routes/sidebarRoutes');
const foodMenuRoutes = require('./src/routes/foodMenuRoutes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use('/api/sidebar', sidebarRoutes);
app.use('/api/food-menu', foodMenuRoutes);

// DB Connection
connectDB();

module.exports = app;
