let express = require('express');

let app = express();

function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}

app.use('/', logger);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.send('Welcome');
});
app.post('/json', (req, res) => {
  res.send(req.body);
});
app.post('/contact', (req, res) => {
  res.send(req.body);
});

app.listen(4000, () => {
  console.log('server is listening to the port 4k');
});
