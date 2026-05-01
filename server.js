/*Module * Configuration*/
const express = require('express');
require('dotenv').config();
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT;
app.use(express.static('public'));

/*Pré Route*/

//Route principale
app.get('/', (req, res) => {
  res.sendFile('/public/index.html');
});

//route de recupération des BDD
let Recup_BDD = process.env.DB_NAME; 
app.get('/use/:BDD_name', (req, res) => {

  Recup_BDD = req.params.BDD_name;
  
  res.send(`${Recup_BDD}`);

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


/*Lancement du serveur*/
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});