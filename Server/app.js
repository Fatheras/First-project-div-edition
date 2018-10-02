const express = require('express');
const app = express();
const router = require('./user/user-router');
const DBService = require('./db/services/db-service');
const loggers = require('./tools/loggers');
const bodyParser = require('body-parser');

const port = 3000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/api/v1', router);

loggers.initLoggers();
loggers.initGlobalLoggers();

const initApplication = async () => {
  try {
    await DBService.initDataBase();
  }
  catch (err) {
    logger.error('app => ERROR');
    logger.error(err);
  }
}

initApplication();

app.use(function (req, res, next) {
  res.status(404).send('error 404!');
});

app.use(function (err, req, res, next) {
  res.status(500).send('error 500!');
});


app.listen(port, () => console.log(`Server started on port ${port}`));

