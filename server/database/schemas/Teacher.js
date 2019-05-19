const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Teacher = new Schema({
  name: String,
  password: String,
  phone: Number,
  email: String,
  photo: String,
  bio: String,
  website: String,
  childSafeCert: Boolean,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Teacher', Teacher);
