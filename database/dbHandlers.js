const shortcodes = require('../models/shortCode');
const shorturls= require('../models/shortURL');
const uniquecodes= require('../models/uniqueCodes');
var config = require('../config');
var mongoose = require('mongoose')

exports.connectToDatabase = () =>{
  const url = config.mongoUrl;
  const connect = mongoose.connect(url);
   connect.then((db) => {
      console.log("Connected correctly to mongodb server");
  }, (err) => { console.log(err); });
}

exports.writeToShortCodes =  (object) => {
    shortcodes.create(object,).then( async ()=>{
    uniquecodes.create({Code:object['code']});
  });
}

exports.shortCodeCount = (callback) => {

  shortcodes.estimatedDocumentCount({}).then(async (count)=>{
    callback(null,count);
  });
}


exports.fetchOneCodeAndDelete =  (callback) => {
  uniquecodes.find({}).limit(1).then(async (object) => {
    await uniquecodes.findByIdAndDelete(object[0]["_id"]);
    callback(null,object);
  });
}

exports.writeToShortURLS = async (object) => {
  await  shorturls.create(object);
}

exports.findLongURLInShortURL= (longURLs,callback) => {
  shorturls.find({longURL:longURLs["longURL"]}).then( (object)=>{
      callback(null,object);
});
}

exports.findShortCodeInShortURL= (code,callback) => {
  shorturls.find({shortCode:code}).then((object)=>{
        callback(null,object);
  });
}
