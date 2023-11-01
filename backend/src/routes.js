const express = require('express');
const app = express();


app.use('/', require('./controllers/helper'));
app.use('/message', require('./controllers/message'));

module.exports = app;