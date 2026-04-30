// ─────────────────────────────────────────────────────────────────────────────
// Fonction appelée quand on clique sur "Se connecter"
// Elle lit la valeur du <select> et appelle le serveur
// ─────────────────────────────────────────────────────────────────────────────
function connecterBDD() {

    // On récupère la valeur choisie dans le menu déroulant
    const exerciceChoisi = document.getElementById("bdd-select").value;

    // On demande au serveur de changer de base de données
    fetch(`/use/${exerciceChoisi}`)
        .then(res => res.text())
        .then(() => {
            // Une fois le serveur prêt, on construit l'interface
            afficherExercice(exerciceChoisi);
        })
        .catch(err => alert("Erreur de connexion : " + err));
}


// ─────────────────────────────────────────────────────────────────────────────
// Fonction qui construit l'interface selon l'exercice choisi
// ─────────────────────────────────────────────────────────────────────────────
function afficherExercice(exercice) {

    // --- Étape 1 : on efface ce qui était affiché avant ---
    document.getElementById("zone-interface").textContent = "";
    document.getElementById("zone-image").textContent = "";


    // --- Étape 2 : on crée les titres des deux zones ---

    const titreInterface = document.createElement("h3");
    titreInterface.textContent = "Interface";
    document.getElementById("zone-interface").appendChild(titreInterface);

    const titreImage = document.createElement("h3");
    titreImage.textContent = "Image de la BDD";
    document.getElementById("zone-image").appendChild(titreImage);


    // --- Étape 3 : on prépare l'image (le src sera défini plus bas) ---
    const img = document.createElement("img");


    // --- Étape 4 : on crée le conteneur du formulaire ---
    const formContainer = document.createElement("div");
    formContainer.id = "form-container";
    document.getElementById("zone-interface").appendChild(formContainer);


    // ─── Exercice 1 ──────────────────────────────────────────────────────────
    if (exercice === "TP2_BDD_EXO_1") {

        // Image
        img.src = "Capture/Capture_exo_1.PNG";
        img.alt = "Capture de la BDD exercice 1";

        // -- Partie 1 : Joueurs --

        const labelJoueurs = document.createElement("p");
        labelJoueurs.textContent = "Choisir les joueurs";
        formContainer.appendChild(labelJoueurs);

        // Ligne avec les deux inputs côte à côte
        const rowJoueurs = document.createElement("div");
        rowJoueurs.id = "row-joueurs";
        formContainer.appendChild(rowJoueurs);

        const inputJoueur1 = document.createElement("input");
        inputJoueur1.type = "text";
        inputJoueur1.placeholder = "Joueur 1";
        rowJoueurs.appendChild(inputJoueur1);

        const vs = document.createElement("p");
        vs.textContent = "VS";
        rowJoueurs.appendChild(vs);

        const inputJoueur2 = document.createElement("input");
        inputJoueur2.type = "text";
        inputJoueur2.placeholder = "Joueur 2";
        rowJoueurs.appendChild(inputJoueur2);


        // -- Partie 2 : Date & heure --

        const labelDateTime = document.createElement("p");
        labelDateTime.textContent = "Quelle date et heure ?";
        formContainer.appendChild(labelDateTime);

        const rowDateTime = document.createElement("div");
        rowDateTime.id = "row-datetime";
        formContainer.appendChild(rowDateTime);

        const inputDate = document.createElement("input");
        inputDate.type = "text";
        inputDate.placeholder = "Date";
        rowDateTime.appendChild(inputDate);

        // Élément vide qui sert de séparateur visuel entre date et heure
        const separateur = document.createElement("span");
        rowDateTime.appendChild(separateur);

        const inputHeure = document.createElement("input");
        inputHeure.type = "text";
        inputHeure.placeholder = "Heure";
        rowDateTime.appendChild(inputHeure);


        // -- Partie 3 : Terrain --

        const rowTerrain = document.createElement("div");
        rowTerrain.id = "row-terrain";
        formContainer.appendChild(rowTerrain);

        const labelTerrain = document.createElement("p");
        labelTerrain.textContent = "Quel terrain ?";
        rowTerrain.appendChild(labelTerrain);

        const selectTerrain = document.createElement("select");
        selectTerrain.id = "select-terrain";
        rowTerrain.appendChild(selectTerrain);

        const optionTerrain = document.createElement("option");
        optionTerrain.textContent = "--Veuillez choisir un terrain--";
        optionTerrain.value = "0";
        selectTerrain.appendChild(optionTerrain);


        // -- Bouton valider --

        const boutonValider = document.createElement("button");
        boutonValider.id = "btn-valider";
        boutonValider.textContent = "Valider";
        formContainer.appendChild(boutonValider);
    }


    // ─── Exercice 2 ──────────────────────────────────────────────────────────
    else if (exercice === "TP2_BDD_EXO_2") {

        // Image
        img.src = "Capture/Capture_exo_2.PNG";
        img.alt = "Capture de la BDD exercice 2";

        // -- Patient --

        const labelPatient = document.createElement("p");
        labelPatient.textContent = "Patient";
        formContainer.appendChild(labelPatient);

        const inputNom = document.createElement("input");
        inputNom.type = "text";
        inputNom.placeholder = "Nom";
        formContainer.appendChild(inputNom);

        const inputPrenom = document.createElement("input");
        inputPrenom.type = "text";
        inputPrenom.placeholder = "Prénom";
        formContainer.appendChild(inputPrenom);

        // -- Docteur --

        const labelDocteur = document.createElement("p");
        labelDocteur.textContent = "Docteur";
        formContainer.appendChild(labelDocteur);

        const selectDocteur = document.createElement("select");
        selectDocteur.id = "select-docteur";
        formContainer.appendChild(selectDocteur);

        const optionDocteur = document.createElement("option");
        optionDocteur.textContent = "--Veuillez choisir un docteur--";
        optionDocteur.value = "0";
        selectDocteur.appendChild(optionDocteur);
    }


    // ─── Exercice 3 ──────────────────────────────────────────────────────────
    else if (exercice === "TP2_BDD_EXO_3") {

        // Image
        img.src = "Capture/Capture_exo_3.PNG";
        img.alt = "Capture de la BDD exercice 3";

        // Interface 3 — à compléter
    }


    // --- Étape finale : on ajoute l'image dans la zone image ---
    document.getElementById("zone-image").appendChild(img);
}


// ─────────────────────────────────────────────────────────────────────────────
// Quand la page est complètement chargée :
//   - on branche le bouton sur la fonction connecterBDD
//   - on appelle connecterBDD une première fois pour afficher l'exercice 1
// ─────────────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("btn-connecter").addEventListener("click", connecterBDD);

    // Chargement automatique au démarrage
    connecterBDD();
});