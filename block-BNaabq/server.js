var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

app.use(logger('dev'));

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));

app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});
app.use('/about', (req, res, next) => {
  res.cookie('username', 'suraj');
  res.end('about page');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('server listening onport 3k');
});
