const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Parent = new Schema({
  name: String,
  password: String,
  phone: Number,
  email: String,
  arabic: Boolean,
  english: Boolean,
  hebrew: Boolean,
  russian: Boolean,
  birthTo1: Boolean,
  oneToTwo: Boolean,
  twoToFour: Boolean,
  fiveToSix: Boolean,
  sevenToEight: Boolean,
  nineToTen: Boolean,
  sports: Boolean,
  art: Boolean,
  theatre: Boolean,
  computers: Boolean,
  music: Boolean,
  social: Boolean,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Parent', Parent);
