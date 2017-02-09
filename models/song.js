var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Song = new Schema({
  title: { type: String, required: true },
  description: String,
  updatedAt: Date
});

module.exports = mongoose.model('Song', Song);

