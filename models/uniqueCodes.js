const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UniqueCodeSchema = new Schema({
  Code :{
    type:String,
  }
});

var UniqueCodes = mongoose.model('UniqueCodes',UniqueCodeSchema);
module.exports = UniqueCodes;
