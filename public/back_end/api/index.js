const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', '..', 'public')));
app.use('/assets', express.static(path.join(__dirname,'..', '..', 'archive')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'front_end', 'index.html'));
});
app.get('/styles/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'front_end', 'style.css'));
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
module.exports = app;