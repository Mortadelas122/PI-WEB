const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const db = new sqlite3.Database('./database.db');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Crear tablas si no existen
db.run(`CREATE TABLE IF NOT EXISTS catalogo (id INTEGER PRIMARY KEY, titulo TEXT, imagen TEXT, video TEXT)`);
db.run(`CREATE TABLE IF NOT EXISTS noticias (id INTEGER PRIMARY KEY, titulo TEXT, contenido TEXT)`);

// Endpoints
app.get('/catalogo', (req, res) => {
  db.all('SELECT * FROM catalogo', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.get('/noticias', (req, res) => {
  db.all('SELECT * FROM noticias', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/catalogo', (req, res) => {
  const { titulo, imagen, video } = req.body;
  db.run(`INSERT INTO catalogo (titulo, imagen, video) VALUES (?, ?, ?)`,
    [titulo, imagen, video], function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    });
});

app.post('/noticias', (req, res) => {
  const { titulo, contenido } = req.body;
  db.run(`INSERT INTO noticias (titulo, contenido) VALUES (?, ?)`,
    [titulo, contenido], function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`));