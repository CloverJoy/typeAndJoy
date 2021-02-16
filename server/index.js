const express = require('express')
require('dotenv').config();
const app = express()
const {
  retrieve,
  insertQuestion,
  deleteQuestion,
  retrieveResults,
  insertResult,
  deleteResult,
  createAdmin,
  loginAdmin,
} = require('../database/controller.js');
const { generateToken, authenticateToken } = require('./security.js');

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

app.post('/api/questions',authenticateToken, async (req, res) => {
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

app.delete('/api/questions', authenticateToken, async (req,res) => {
  try {
    const { id } = req.query;
    await deleteQuestion(id);
    res.sendStatus(204);
  } catch(err) {
    console.log(err);
    res.send(500)
  }
});

app.get('/api/results', async (req, res) => {
  try {
    const data = await retrieveResults();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(500);
  }
});

app.post('/api/results', async (req,res) => {
  try {
    const data = req.body;
    console.log(data)
    await insertResult(data);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.send(500);
  }
});

app.delete('/api/results', authenticateToken, async (req,res) => {
  try {
    const { id } = req.query;
    await deleteResult(id);
    res.sendStatus(204);
  } catch(err) {
    console.log(err);
    res.send(500)
  }
});

app.post('/api/admin', async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    await createAdmin(data);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.send(500);
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const data = req.body;
    const status = await loginAdmin(data);
    if (status.userName ===  data.userName) {
      const dataReturn = {userName: status.userName }
      const token = generateToken(dataReturn)
      dataReturn.token = token;
      res.send(dataReturn);
    }
    res.send(status);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log(`typeAndJoy listening at http://localhost:${PORT}`);
});