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

async function insertName(req) {
  const { name } = req.body;
  return `INSERT INTO aspects (name) VALUES ('${name}');`;
}

app.post('/addname', async (req, res) => {
  try {
    const statement = await insertName(req);
    await client.query(statement);
    await res.status(201).send();
  } catch (e) {
    console.log(e);
  }
});

async function insertMetric(req) {
  const [id, metric] = req.body;
  return `UPDATE aspects SET metric = '${metric}' where id = ${id};`;
}

app.post('/addmetric', async (req, res) => {
  try {
    const statement = await insertMetric(req);
    await client.query(statement);
    await res.status(201).send();
  } catch (e) {
    console.log(e);
  }
});

async function insertWholeActivity(req) {
  const {
    name, metric, freq, why,
  } = req.body;
  const insertValue = `'${name}', '${metric}', '${freq}', '${why}'`;
  return `INSERT INTO aspects (name, metric, freq, why) VALUES (${insertValue});`;
}

app.post('/addactivity', async (req, res) => {
  try {
    const statement = await insertWholeActivity(req);
    await client.query(statement);
    await res.status(201).send;
    res.redirect('/simplified');
  } catch (e) {
    console.log(e);
  }
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

async function formulatePUT(req) {
  const [itemsToBeRenamed] = req.body;
  const [original, updated] = itemsToBeRenamed;
  return `UPDATE aspects SET name = '${updated}' WHERE name = '${original}';`;
}

app.put('/rename', async (req, res) => {
  console.log('PUT request received');
  try {
    const statement = await formulatePUT(req);
    await client.query(statement);
    res.status(200).send();
  } catch (e) {
    console.log('\nERROR MESSAGE', e);
    res.status(400).send();
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
