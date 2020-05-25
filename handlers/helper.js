const mongoose = require('mongoose');
const shortcodes = require('../models/shortCode');
const shorturls= require('../models/shortURL');
var config = require('../config');
var dbHandlers = require('../database/dbHandlers')
let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var CronJob = require('cron').CronJob;





codesGenerator = async () => {
  pickRandom = () => {
    return possible[Math.floor(Math.random() * possible.length)];
  }
  for(i=0;i<config.generatecount;i++){
  let  randomString = Array.apply(null, Array(config.stringLength)).map(pickRandom).join('');
    var object = {
      code : randomString,
    }
  await   dbHandlers.writeToShortCodes(object);
  }
    console.log('working');
  }


exports.generateCodeCronJob = () => {
var job = new CronJob('0 * * * * *', function (){
  dbHandlers.shortCodeCount(async (err,count)=>{
    console.log(count);
    if(count <= 610)
    {
        await codesGenerator();
        console.log('codes generation done');
    }
  })



}, null, true, 'America/Los_Angeles');
}
