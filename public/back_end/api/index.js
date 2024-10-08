const express = require('express');
const path = require('path');
const app = express();
const cloudinaryUrlPath = require('../cloudinary');
const port = 3000;

app.use('/assets', express.static(path.join(__dirname,'..', '..', 'assets')));
app.use('/clientside', express.static(path.join(__dirname,'..', '..', 'front_end')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'front_end', 'index.html'));
});
app.get('/generateImage', (req, res) => {
  const url = cloudinaryUrlPath();
  res.json({ url });
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
module.exports = app;