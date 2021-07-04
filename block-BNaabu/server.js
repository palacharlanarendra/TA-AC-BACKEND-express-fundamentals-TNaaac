var express = require('express');

var app = express();
app.use((req, res, next) => {
  console.log(req.url);
  if (req.url === '/admin') {
    return next('Unauthorized');
  }

  next();
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});
app.use((req, res, next) => {
  res.send('Page not Found');
});

app.listen(3000, () => {
  console.log('server listening onport 3k');
});
