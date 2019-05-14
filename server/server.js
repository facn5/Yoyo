const express = require('express');
const compression = require('compression');
const controllers = require('./controllers/routes');
const app = express();

const mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

const API_PORT = 3001;

app.use(cors());
const router = express.Router();

const dbRoute = 'mongodb+srv://yoyo-team:1020304050@yoyodb-rm67b.mongodb.net/test?retryWrites=true'

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true}
);

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database on port 3001'));

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

module.exports = app;
