const mongoose = require('mongoose');
require('env2')('../config.env');

const DB_CONNECTION = process.env.DB_URL;
const db = mongoose.connection;

mongoose.connect(DB_CONNECTION, { useNewUrlParser: true },
  console.log('Database is connected'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = { db };
