//Conection a la basse de donnée
function connecterBDD() {
    const exerciceChoisi = document.getElementById("bdd-select").value;

    fetch(`/use/${exerciceChoisi}`)
        .then(res => res.text())
        .then(() => {
            afficherExercice(exerciceChoisi);
        })
        .catch(err => alert("Erreur de connexion : " + err));
}

//Affichage des exercice
function afficherExercice(exercice) {

    document.getElementById("zone-interface").textContent = "";
    document.getElementById("zone-image").textContent = "";

    const titreInterface = document.createElement("h3");
    titreInterface.textContent = "Interface";
    document.getElementById("zone-interface").appendChild(titreInterface);

    const titreImage = document.createElement("h3");
    titreImage.textContent = "Image de la BDD";
    document.getElementById("zone-image").appendChild(titreImage);

    const img = document.createElement("img");

    const formContainer = document.createElement("div");
    formContainer.id = "form-container";
    document.getElementById("zone-interface").appendChild(formContainer);

    //Exercice 1
    if (exercice === "TP2_BDD_EXO_1") {

        img.src = "Capture/Capture_exo_1.PNG";
        img.alt = "Capture de la BDD exercice 1";

        //Partie 1
        const labelJoueurs = document.createElement("p");
        labelJoueurs.textContent = "Choisir les joueurs";
        formContainer.appendChild(labelJoueurs);

        const Joueur_1 = document.createElement("div");
        Joueur_1.className = "joueur_nom_prenom";
        formContainer.appendChild(Joueur_1);

        const input_joueur_1_nom = document.createElement("input");
        input_joueur_1_nom.type = "text";
        input_joueur_1_nom.id = "nom_joueur_1";
        input_joueur_1_nom.placeholder = "Nom du joueur 1";
        Joueur_1.appendChild(input_joueur_1_nom);

        const input_joueur_1_prenom = document.createElement("input");
        input_joueur_1_prenom.type = "text";
        input_joueur_1_prenom.placeholder = "Prenom du joueur 1";
        input_joueur_1_prenom.id = "prenom_joueur_1";
        Joueur_1.appendChild(input_joueur_1_prenom);

        const vs = document.createElement("p");
        vs.textContent = "VS";
        formContainer.appendChild(vs);

        const Joueur_2 = document.createElement("div");
        Joueur_2.className = "joueur_nom_prenom";
        formContainer.appendChild(Joueur_2);

        const input_joueur_2_nom = document.createElement("input");
        input_joueur_2_nom.type = "text";
        input_joueur_2_nom.placeholder = "Nom du joueur 2";
        Joueur_2.appendChild(input_joueur_2_nom);

        const input_joueur_2_prenom = document.createElement("input");
        input_joueur_2_prenom.type = "text";
        input_joueur_2_prenom.placeholder = "Prenom du joueur 2";
        Joueur_2.appendChild(input_joueur_2_prenom);

        //Partie 2
        const labelDateTime = document.createElement("p");
        labelDateTime.textContent = "Date et heure";
        formContainer.appendChild(labelDateTime);

        const rowDateTime = document.createElement("div");
        rowDateTime.id = "row-datetime";
        formContainer.appendChild(rowDateTime);

        const inputDate = document.createElement("input");
        inputDate.type = "text";
        inputDate.placeholder = "Date";
        rowDateTime.appendChild(inputDate);

        const separateur = document.createElement("span");
        rowDateTime.appendChild(separateur);

        const inputHeure = document.createElement("input");
        inputHeure.type = "text";
        inputHeure.placeholder = "Heure";
        rowDateTime.appendChild(inputHeure);

        //Partie 3
        const rowTerrain = document.createElement("div");
        rowTerrain.id = "row-terrain";
        formContainer.appendChild(rowTerrain);

        const labelTerrain = document.createElement("p");
        labelTerrain.textContent = "Terrain";
        rowTerrain.appendChild(labelTerrain);

        const selectTerrain = document.createElement("select");
        selectTerrain.id = "select-terrain";
        rowTerrain.appendChild(selectTerrain);

        const optionTerrain = document.createElement("option");
        optionTerrain.textContent = "--Veuillez choisir un terrain--";
        selectTerrain.appendChild(optionTerrain);

        const optionTerrain1 = document.createElement("option");
        optionTerrain1.textContent = "Terrain n°1";
        optionTerrain1.value = "0";
        selectTerrain.appendChild(optionTerrain1);

        const optionTerrain2 = document.createElement("option");
        optionTerrain2.textContent = "Terrain n°2";
        optionTerrain2.value = "1";
        selectTerrain.appendChild(optionTerrain2);

        const optionTerrain3 = document.createElement("option");
        optionTerrain3.textContent = "Terrain n°3";
        optionTerrain3.value = "2";
        selectTerrain.appendChild(optionTerrain3);

        const optionTerrain4 = document.createElement("option");
        optionTerrain4.textContent = "Terrain n°4";
        optionTerrain4.value = "3";
        selectTerrain.appendChild(optionTerrain4);

        const optionTerrain5 = document.createElement("option");
        optionTerrain5.textContent = "Terrain n°5";
        optionTerrain5.value = "4";
        selectTerrain.appendChild(optionTerrain5);

        //Boutton de validation
        const boutonValider = document.createElement("button");
        boutonValider.id = "btn-valider";
        boutonValider.textContent = "Valider";
        boutonValider.addEventListener("click", envoyer_exo_1);
        formContainer.appendChild(boutonValider);
    }

    //Exercice 2
    else if (exercice === "TP2_BDD_EXO_2") {

        //Image
        img.src = "Capture/Capture_exo_2.PNG";
        img.alt = "Capture de la BDD exercice 2";

        //Patient

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

        //Docteur
        const labelDocteur = document.createElement("p");
        labelDocteur.textContent = "Docteur";
        formContainer.appendChild(labelDocteur);

        const selectDocteur = document.createElement("select");
        selectDocteur.id = "select-docteur";
        formContainer.appendChild(selectDocteur);

        const optionDocteur = document.createElement("option");
        optionDocteur.textContent = "Veuillez choisir un docteur";
        optionDocteur.value = "";
        selectDocteur.appendChild(optionDocteur);

        //Boutton de validation
        const boutonValider2 = document.createElement("button");
        boutonValider2.id = "btn-valider";
        boutonValider2.textContent = "Valider";
        formContainer.appendChild(boutonValider2);
    }

    //Exercice 3 
    else if (exercice === "TP2_BDD_EXO_3") {

        //Image
        img.src = "Capture/Capture_exo_3.PNG";
        img.alt = "Capture de la BDD exercice 3";

        //Interface 3 
        const selectVille = document.createElement("select");
        selectVille.id = "select-Ville";
        formContainer.appendChild(selectVille);

        const option1 = document.createElement("option");
        option1.textContent = "Veuillez choisir une ville";
        option1.value = "";
        selectVille.appendChild(option1);

        const selectEntrepot = document.createElement("select");
        selectEntrepot.id = "select-Entrepot";
        formContainer.appendChild(selectEntrepot);

        const option1_1 = document.createElement("option");
        option1_1.textContent = "Veuillez choisir un entrepôt";
        option1_1.value = "";
        selectEntrepot.appendChild(option1_1);

        const inputMarchandise = document.createElement("input");
        inputMarchandise.type = "text";
        inputMarchandise.placeholder = "Nom de la marchandise";
        formContainer.appendChild(inputMarchandise);

        const ligneVertical = document.createElement("hr");
        formContainer.appendChild(ligneVertical);

        const selectConducteur = document.createElement("select");
        selectConducteur.id = "select-Conducteur";
        formContainer.appendChild(selectConducteur);

        const option2_1 = document.createElement("option");
        option2_1.textContent = "Veuillez choisir un conducteur";
        option2_1.value = "";
        selectConducteur.appendChild(option2_1);

        const selectTypeCamion = document.createElement("select");
        selectTypeCamion.id = "select-Conducteur";
        formContainer.appendChild(selectTypeCamion);

        const option3_1 = document.createElement("option");
        option3_1.textContent = "Type de Camion";
        option3_1.value = "";
        selectTypeCamion.appendChild(option3_1);

        const selectCamion = document.createElement("select");
        selectCamion.id = "select-Camion";
        formContainer.appendChild(selectCamion);

        const option4_1 = document.createElement("option");
        option4_1.textContent = "Camion";
        option4_1.value = "";
        selectCamion.appendChild(option4_1);

        const ligneVertical2 = document.createElement("hr");
        formContainer.appendChild(ligneVertical2);

        const selectVille2 = document.createElement("select");
        selectVille2.id = "select-Ville2";
        formContainer.appendChild(selectVille2);

        const option5_1 = document.createElement("option");
        option5_1.textContent = "Veuillez choisir une ville";
        option5_1.value = "";
        selectVille2.appendChild(option5_1);

        const selectEntrepot2 = document.createElement("select");
        selectEntrepot2.id = "select-Entrepot2";
        formContainer.appendChild(selectEntrepot2);

        const option6_1 = document.createElement("option");
        option6_1.textContent = "Veuillez choisir un entrepôt";
        option6_1.value = "";
        selectEntrepot2.appendChild(option6_1);
    }

    document.getElementById("zone-image").appendChild(img);
}

function envoyer_exo_1() {

    const nom = document.getElementById("nom_joueur_1").value;
    const prenom = document.getElementById("prenom_joueur_1").value;

    fetch("/exo_1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nom: nom,
            prenom: prenom
        })
    })
}

//Chargement automatique
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("btn-connecter").addEventListener("click", connecterBDD);

    connecterBDD();
});