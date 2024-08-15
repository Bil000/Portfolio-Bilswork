const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'front_end')));

app.get('/', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '..', 'front_end', 'index.html'));
  } catch (err) {
    res.status(400).send('Bad Request');
  }
});

app.listen(port, () => {
  console.log("server running sucessfuly!")
});

module.exports = app;
