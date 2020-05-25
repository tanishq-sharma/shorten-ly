const express = require('express')
const redirectRouter = express.Router();
const links = require('../handlers/links')
const cors = require('./cors');


redirectRouter.route('/:shortCode')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors,
   (req,res,next) => {
  links.redirect(req,res,next);
});



module.exports = redirectRouter;
