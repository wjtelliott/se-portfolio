/** @format */

// CONFIG
require('dotenv').config();
const express = require('express'),
    app = express(),
    path = require('path'),
    buildPath = path.join(__dirname, '../client/build/'),
    port = process.env.PORT,
    logger = require('morgan'),
    cors = require('cors');

// API CONTROLLERS
const { contactController } = require('./controllers');

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.static(buildPath));
app.use(express.json());
app.use(logger('dev'));
app.use(cors());

// ROUTES & SERVE CLIENT BUILD
app.use('/api/contact', contactController);
app.get('*', (_, res) => {
    res.sendFile(buildPath + 'index.html');
});

// START
app.listen(port, () => {
    console.log(`Server is listening on PORT: ${port}`);
});
