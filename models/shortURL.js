const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ShortURLSchema = new Schema({
  count : {
    type : Number,
  },
  longURL : {
    type: String,
  },
  shortCode : {
    type: String,
    required: true
  },
  createdAt : {
     type: Date, default: Date.now
   }

},{
  timestamps :true
});

var ShortURL = mongoose.model('ShortURL',ShortURLSchema);
module.exports = ShortURL;
