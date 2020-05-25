const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ShortCodeSchema = new Schema({
  code :{
    type:String,
    unique:true
  }
});

var ShortCodes = mongoose.model('ShortCode',ShortCodeSchema);
module.exports = ShortCodes;
