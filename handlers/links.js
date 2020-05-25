const shorturls= require('../models/shortURL');
const shortcodes = require('../models/shortCode');
var async = require("async");
var linkHandlers = require('../handlers/linkHandlers');



exports.createlink = async (req,res,next) => {
await linkHandlers.assignNewCodeAndDelete(req.body,res,next);
}


exports.redirect =async (req,res,next) => {
await linkHandlers.findCodeAndRedirect(req.params.shortCode,res,next);

}
