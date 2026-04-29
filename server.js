/*Module * Configuration*/
const express = require('express');
require('dotenv').config();
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT;
app.use(express.static('public'));

//route recup BDD
let Recup_BDD = process.env.DB_NAME; 
app.get('/use/:BDD_name', (req, res) => {

  Recup_BDD = req.params.BDD_name;

  db.changeUser({ database: Recup_BDD }, (err) => {

    if (err) {
      console.error("Erreur changement de base :", err);
      return res.status(500).send("Impossible de changer de base : " + err.message);
    }

    console.log(`Base changée → ${Recup_BDD}`);
    res.send(`Base sélectionnée : ${Recup_BDD}`);
  });
});

/*BDD*/
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: Recup_BDD
});

//Test BDD
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion MySQL :', err);
    return;
  }
  console.log('Connexion MySQL réussie');
});

/*Route*/
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

/*Lancement du serveur*/
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});