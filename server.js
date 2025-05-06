const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/organizations', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading data.');
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
