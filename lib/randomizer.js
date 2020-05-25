const mongoose = require('mongoose');
const shortCode = require('../models/shortCode');



function Randomizer() {
  let randomString = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let stringLength = 6;

  function pickRandom() {
    return possible[Math.floor(Math.random() * possible.length)];
  }
//  console.log(db.shortCode.count());

  for(i=0;i<5;i++){
    randomString = Array.apply(null, Array(stringLength)).map(pickRandom).join('');
    var abc = {
      code : randomString,
    }
  //  console.log(abc);
//
shortCode.create(abc);
    //console.log(randomString);
  }
  var ab = {
    code : 'abcde',
  }
  shortCode.create(ab);
}

module.exports = Randomizer;
