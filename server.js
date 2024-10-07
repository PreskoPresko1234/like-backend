// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let likes = 0; // Това е броят на лайковете (може да използваш база данни вместо това)

app.get('/likes', (req, res) => {
  res.json({ likes });
});

app.post('/likes', (req, res) => {
  const { change } = req.body;
  likes += change;
  res.json({ likes });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
