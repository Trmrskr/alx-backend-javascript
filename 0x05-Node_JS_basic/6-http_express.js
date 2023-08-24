const express = require('express');

const app = express();
const port = 1245;
const host = 'localhost';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server listening at http://${host}:${port}`);
});

module.exports = app;
