/* Module * Configuration */
const express = require('express');
require('dotenv').config();
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT;
app.use(express.static('public'));
app.use(express.json());

/* Connexion BDD */
let db = null;

function connecterBDD(nomBDD) {
  if (db) db.destroy(); // Ferme l'ancienne connexion si elle existe

  db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: nomBDD
  });

  db.connect((err) => {
    if (err) {
      console.error('Erreur de connexion MySQL :', err);
      return;
    }
    console.log(`Connexion MySQL réussie sur : ${nomBDD}`);
  });
}

// Connexion initiale
connecterBDD(process.env.DB_NAME);

/* Pré Route */
app.get('/', (req, res) => {
  res.sendFile('/public/index.html');
});

app.get('/use/:BDD_name', (req, res) => {
  const nomBDD = req.params.BDD_name;
  connecterBDD(nomBDD); // Recrée la connexion avec la nouvelle BDD
  res.send(nomBDD);
});

/* Routes */
app.post('/exo_1/1', (req, res) => {
  const nom = req.body.nom;
  const prenom = req.body.prenom;

  const sql = "INSERT INTO Joueur (nom, prenom) VALUES (?, ?)";

  db.query(sql, [nom, prenom], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json({ message: "Étudiant ajouté !" });
  });
});

app.post('/exo_1/2', (req, res) => {
  const nom2 = req.body.nom2;
  const prenom2 = req.body.prenom2;

  const sql = "INSERT INTO Joueur (nom, prenom) VALUES (?, ?)";

  db.query(sql, [nom2, prenom2], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json({ message: "Étudiant ajouté !" });
  });
});

app.post('/exo_1/terrain', (req, res) => {
  const terrainSelectionne = req.body.terrainSelectionne;

  const sql = "INSERT INTO Terrain (id) VALUES (?)";

  db.query(sql, [terrainSelectionne], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json({ message: "Terrain ajouté !" });
  });
});

/* Lancement */
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
