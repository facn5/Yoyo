const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const logger = require('morgan');
const eventRouter = require('./routes/event.js');
const parentRouter = require('./routes/parent.js');
const teacherRouter = require('./routes/teacher.js');
require('env2')('../config.env');

const app = express();

app.disable('x-powered-by');
app.use(compression());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' }));

app.use('/event', eventRouter);
app.use('/parent', parentRouter);
app.use('/teacher', teacherRouter);

module.exports = app;
