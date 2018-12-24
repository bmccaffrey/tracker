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
  res.redirect('/throwaway');
});

async function formulateDelete(req) {
  const itemsToBeDeleted = req.body;
  let formattedItems = '';

  for (let i = 0; i < itemsToBeDeleted.length; i++) {
    if (i < itemsToBeDeleted.length - 1) {
      formattedItems += `'${itemsToBeDeleted[i]}', `;
    } else {
      formattedItems += `'${itemsToBeDeleted[i]}'`;
    }
  }
  return `DELETE FROM aspects WHERE name IN (${formattedItems})`;
}

app.delete('/remove', async (req, res) => {
  try {
    const statement = await formulateDelete(req);
    await client.query(statement);
    res.status(204).send();
  } catch (e) {
    console.log('\nERROR MESSAGE', e);
    res.status(400).send();
  }
});

app.put('/recipes', async (req, res) => {
  console.log('PUT request received');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
