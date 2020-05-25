const express = require("express");
var createError = require('http-errors');
var routes = require('../routes/routes');
const helper = require('./helper')
const dbHandlers = require('../database/dbHandlers')
const path = require('path');

exports.initializeServer = async () => {
await helper.generateCodeCronJob();
await dbHandlers.connectToDatabase();




  const app = express();
  const PORT = process.env.PORT || 8081;

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('', (req, res) => {
  res.sendFile(path.join(__dirname, '../cliend/build', 'index.html'));
});

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use('/',routes);

  app.use(function(req, res, next) {
    next(createError(404));
  });

  app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.json({
    message: err.message,
    error: err
  });
  });


  app.listen(PORT, () => {
   console.log(`Server started on port`, PORT);
  });

}
