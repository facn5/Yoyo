const express = require('express');
const bodyparser = require('body-parser');
const compression = require('compression');
const controllers = require('./controllers/routes');

const app = express();

app.disable('x-powered-by');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(controllers);
app.set('port', process.env.PORT || 7777);

module.exports = app;
