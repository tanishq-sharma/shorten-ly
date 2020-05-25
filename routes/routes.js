const Router   = require("express").Router;

var redirectRouter = require('./redirectRouter');
var shortenRouter = require('./shortenRouter');

const routes = Router();

routes.use('/',redirectRouter);
routes.use('/api', shortenRouter);

module.exports = routes;
