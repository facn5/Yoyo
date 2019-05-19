const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Event = new Schema({
  name: String,
  location: String,
  description: String,
  photo: String,
  days: String,
  singlePrice: Number,
  termPrice: Number,
  maxChild: Number,
  minAge: Number,
  maxAge: Number,
  languages: Array,
  superpowers: Array,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Event', Event);
