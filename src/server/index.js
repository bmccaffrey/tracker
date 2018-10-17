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

app.get('/recipes', async (req, res) => {
  const { rows } = await client.query("SELECT * FROM recipes WHERE name = 'Cereal';");
  const [firstRow] = rows;
  res.send(firstRow);
});

app.post('/', async (req, res) => {
  const name = req.body.name;
  const ingredients = req.body.ingredients;
  const directions = req.body.directions;
  await client.query(
    `INSERT INTO recipes (name, ingredients, directions) VALUES ('${name}', '${ingredients}', '${directions}');`,
  );
  await res.redirect('/');
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
