const express = require('express')
const app = express()
const { retrieve, insertQuestion, deleteQuestion } = require('../database/controller.js');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/api/questions', async (req, res) => {
  try {
    const data = await retrieve();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(500);
  }
});

app.post('/api/questions', async (req, res) => {
  try {
    const data = req.body;
    console.log(data)
    await insertQuestion(data);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.send(500);
  }
});

app.delete('/api/questions', async (req,res) => {
  try {
    const { id } = req.query;
    await deleteQuestion(id);
    res.sendStatus(204);
  } catch(err) {
    console.log(err);
    res.send(500)
  }

});

app.listen(PORT, () => {
  console.log(`typeAndJoy listening at http://localhost:${PORT}`);
});