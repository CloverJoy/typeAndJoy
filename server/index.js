const express = require('express')
const app = express()
const { retrieve } = require('../database/controller.js');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/questions', async (req, res) => {
  try {
    const data = await retrieve();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(500);
  }
});

app.listen(PORT, () => {
  console.log(`typeAndJoy listening at http://localhost:${PORT}`);
});