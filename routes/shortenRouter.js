const express = require('express')
const shortenRouter = express.Router();
const links = require('../handlers/links')
const cors = require('./cors');



shortenRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.post(cors.corsWithOptions,
  (req, res, next) => {
  links.createlink(req, res, next);
});



module.exports = shortenRouter;
