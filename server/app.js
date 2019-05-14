const express = require('express');
const compression = require('compression');
const controllers = require('./controllers/routes');
const app = express();

const mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
// const Data = require('./data');

app.disable('x-powered-by');
app.use(express.json());
app.use(compression());
app.use(controllers);

app.use(cors());
const router = express.Router();

const dbRoute = 'mongodb://(mlab address here)'

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true}
);

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/getData', (req, res) => {
  Data.find((err, data) => {
    if(err) return res.json({success: false, error: err});
    return res.json({success: true, data: data});
  });
});

router.post('/updateData', (req, res) => {
  const {id, update} =req.body;
  Data.findOneAndUpdate(id, update, err => {
    if (err) return res.json({success: false, error: err});
    return res.json({success: true});
  });
});

router.delete('/deleteData', (req, res) => {
  const { id } = req.body;
  Data.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({success: true});
  });
});

router.post('/putData', (req, res) => {
  let data = new Data();

  const {id, message} = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: 'Invalid input'
    });
  }
  data.message = message;
  data.id = id;
  data.save(err => {
    if (err) return res.json({success: false, error: err});
    return res.json({success: true});
  });
});

app.use('/api', router);

app.set('port', process.env.PORT || 7777);

module.exports = app;
