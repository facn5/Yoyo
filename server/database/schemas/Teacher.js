const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Teacher = new Schema({
  name: String,
  password: String,
  phone: Number,
  email: String,
  location: String,
  photo: String,
  bio: String,
  website: String,
  childSafeCert: Boolean,
  arabic: Boolean,
  english: Boolean,
  hebrew: Boolean,
  russian: Boolean,
  sports: Boolean,
  art: Boolean,
  theatre: Boolean,
  computers: Boolean,
  music: Boolean,
  social: Boolean,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Teacher', Teacher);
