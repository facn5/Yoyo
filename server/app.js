const express = require('express');
const path = require('path');
const controllers = require('./controllers/router');
const app = express();

app.use(controllers);
app.set('port', process.env.PORT || 7777);


module.exports = app;
