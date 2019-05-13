const express = require('express');

const controllers = require('./controllers/routes');

const app = express();

app.use(controllers);
app.set('port', process.env.PORT || 7777);


module.exports = app;
