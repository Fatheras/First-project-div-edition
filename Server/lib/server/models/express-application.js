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




const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
app.set('port', port);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

  next();
})

app.use('/api/v1', routes);

app.use((req, res) => {
  res.status(404).send('404: NotFound')
});

app.use((err, req, res, next) => {
  logger.info(err.stack)
  res.status(500).send('500: Internal server')
})


module.exports = app;