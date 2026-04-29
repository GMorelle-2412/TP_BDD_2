function Change_Exo(BDD) {

    const img = document.createElement("img");

    if (BDD === "TP2_BDD_EXO_1") {
        img.src = "Capture/Capture_exo_1.PNG";
        img.alt = "Capture_exo_1.PNG";
        
        const p = document.createElement("p");
        p.textContent = "Choisir les joueurs";
        document.getElementById("Zone_Image").appendChild(p);

        const p2 = document.createElement("p");
        p2.textContent = "Choisir le terrain";
        document.getElementById("Zone_Image").appendChild(p2);

        const p3 = document.createElement("p");
        p3.textContent = "Choisir la date et l'heure";
        document.getElementById("Zone_Image").appendChild(p3);

    } else if (BDD === "TP2_BDD_EXO_2") {
        img.src = "Capture/Capture_exo_2.PNG";
        img.alt = "Capture_exo_2.PNG";

    } else if (BDD === "TP2_BDD_EXO_3") {
        img.src = "Capture/Capture_exo_3.PNG";
        img.alt = "Capture_exo_3.PNG";
    }

    document.getElementById("Zone_Image").appendChild(img);
}

function changement_BDD() {

    const BDD = document.getElementById('BDD_Select').value;

    fetch(`/use/${BDD}`)
        .then(res => res.text())
        .then(msg => {
            Change_Exo(BDD);
        })
        .catch(err => alert("Erreur : " + err));
}
