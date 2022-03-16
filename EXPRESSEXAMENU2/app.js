const express = require('express');
const req = require('express/lib/request');
const logger = require('./middleware/logger');
const connectDB = require('./services/mongoose');
const {connectWhatsApp} = require('./services/whatsapp');


const app = express();

//Database connection
connectDB();

//WhatsApp connection
connectWhatsApp();

//Middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//API route
app.use('/api/friends', require('./routes/api/friends'));

module.exports = app;
