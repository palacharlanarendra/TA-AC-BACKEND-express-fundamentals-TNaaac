let express = require('express');

let app = express();
let currentTime = new Date().toLocaleTimeString('en-GB', {
  hour: 'numeric',
  minute: 'numeric',
});
function logger(req, res, next) {
  console.log(req, req.method, req.url, currentTime);
  next();
}

function expressJson(req, res, next) {
  console.log(req.body);
  next();
}

app.use('/', logger);
app.post('/json', expressJson);
app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(3000, () => {
  console.log('server is listening to the port 3k');
});
