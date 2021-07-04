var express = require('express');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/new', (req, res) => {
  res.sendFile(__dirname + '/new.html');
});
app.get('/users/:username', (req, res) => {
  var username = req.params.username;
  res.send(username);
});
app.post('/new', (req, res) => {
  console.log(req.body);
  res.setHeader('Content-Type', 'text/html');
  res.end(`<h2>${req.body.name}</h2>
            <h2>${req.body.email}</h2>`);
});

app.listen(3000, () => {
  console.log('server listening onport 3k');
});
