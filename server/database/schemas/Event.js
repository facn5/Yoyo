const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
  name: String,
  location: String,
  description: String,
  photo: String,
  days: String,
  singlePrice: Number,
  termPrice: Number,
  maxChild: Number,
  ages: String,
  superpowers: String,
  languages: String
})

module.exports = mongoose.model('Events', EventSchema)
