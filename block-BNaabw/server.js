var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
console.log();

app.use('/admin', (req, re, next) => {
  next('Unauthorized to access');
});
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
app.get('/projects', (req, res) => {
  res.sendFile(__dirname + '/blog.html');
});
app.get('/users', (req, res) => {
  res.send('<h2>Users Page</h2>');
});

app.use((req, res, next) => {
  res.send('Page not Found');
});
app.use((err, req, res, next) => {
  res.status(500).send(err);
});
app.listen(3000, () => {
  console.log('server listening onport 3k');
});
