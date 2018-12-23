// Imports
require('dotenv').config({ path: '.env.local' });
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const { Client } = require('pg');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

async function connect() {
  await client.connect();
}

connect();

app.get('/all', async (req, res) => {
  try {
    const { rows } = await client.query('SELECT * FROM aspects;');
    res.send(rows);
  } catch (e) {
    console.error(e);
  }
});

async function createDateTimeString() {
  const now = new Date();
  const dateString = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  const timeString = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  return `${dateString} ${timeString}`;
}

async function formulateInsert(req) {
  const {
    name, metric, freq, why, tracks,
  } = req.body;
  const timeDateString = await createDateTimeString();
  const formattedTracks = `('${timeDateString}', '{${tracks}}')`;
  return `'${name}', '${metric}', '${freq}', '${why}', ${formattedTracks}`;
}

app.post('/', async (req, res) => {
  const attemptedInsert = await formulateInsert(req);
  await client.query(
    `INSERT INTO aspects (name, metric, freq, why, tracks) VALUES (${attemptedInsert});`,
  );
  await res.status(201).send;
});

app.delete('/recipes', async (req, res) => {
  console.log('DELETE Request Received');
  const column = req.query.recipes;
  column
    ? await client.query(`DELETE FROM recipes WHERE name = '${column}';`)
    : console.log('No column was received');
  res.send(`${column} was deleted.`);
});

app.put('/recipes', async (req, res) => {
  console.log('PUT request received');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
