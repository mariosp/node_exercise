const express = require('express');
const app = express();


app.use('/', require('./controllers/helper'));
app.use('/message', require('./controllers/message'));
app.use('/user', require('./controllers/user'));

module.exports = app;