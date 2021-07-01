let express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(3000, () => {
  console.log('listening to the port 3k');
});
