const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const controllers = require('./controllers/routes');

const app = express();

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(compression());
app.use(controllers);
app.set('port', process.env.PORT || 7777);


module.exports = app;
