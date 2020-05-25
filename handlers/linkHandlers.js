var dbHandlers = require('../database/dbHandlers')
const shortcodes = require('../models/shortCode');
const shorturls= require('../models/shortURL');




exports.assignNewCodeAndDelete = (longURLs,res,next) =>{
  dbHandlers.findLongURLInShortURL(longURLs, (err,object)=> {
    if(object.length!==0)
    {
      //console.log('already present in databse');
    res.json({shortCode:object[0]["shortCode"]});
  }
  else{
    dbHandlers.fetchOneCodeAndDelete(async (err,codes) => {
        var code ={
          shortCode : codes[0]["Code"],
        }

        var id = codes[0]["_id"];
        var object = {
          count :0,
          longURL :longURLs["longURL"],
          shortCode : code['shortCode']
        }
        await dbHandlers.writeToShortURLS(object);
        //console.log('shortcode assigned and deleted from db');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(code);


    });
  }
});
}


exports.findCodeAndRedirect = (code,res,next) => {
  dbHandlers.findShortCodeInShortURL(code,(err,object)=>{
    if(object.length!==0)
    { console.log('redirecting');
      res.redirect(301,object[0]["longURL"]);
    }
    else{
      res.end('This link has not yet born');
    }
  });
}
