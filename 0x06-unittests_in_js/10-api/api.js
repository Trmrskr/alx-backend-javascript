const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  res.json({ payment_methods: {credit_cards: true, paypal: false } });
});

app.post('/login', (req, res) => {
  const username = req.body.userName;

  if (username) {
    res.send(`Welcome ${username}`);
  } else {
    res.status(404).send();
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
