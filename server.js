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
app.post('/exo_1', (req, res) => {
  db.query(                                    // "connection" → "db"
    'INSERT INTO Joueur (nom, prenom) VALUES (?, ?)',
    [req.body.nom, req.body.prenom],
    (err, results) => {
      if (err) {
        console.error('Erreur lors de l\'insertion :', err);
        return res.status(500).json({ message: 'Erreur serveur' });
      }
      console.log('Insertion réussie, ID :', results.insertId);
      res.json({ message: 'Inscription réussie !', userId: results.insertId });
    }
  );
});

/* Lancement */
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
