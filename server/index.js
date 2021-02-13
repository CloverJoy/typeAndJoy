const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(PORT, () => {
  console.log(`typeAndJoy listening at http://localhost:${PORT}`);
});