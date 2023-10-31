const express = require('express');
const app = express();


app.use('/', require('./controllers/helper'));

module.exports = app;