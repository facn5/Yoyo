const mongoose = require('mongoose');
const app = require('./app.js');
require('env2')('../config.env');

const DB_CONNECTION = process.env.DB_URL;
const db = mongoose.connection;

app.listen(3001, () => {
  console.log('Node/Express server running on port 3001');
});

mongoose.connect(DB_CONNECTION, { useNewUrlParser: true });

db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
