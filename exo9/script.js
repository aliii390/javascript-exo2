   
let chiffre = parseInt(prompt("Entrez un chiffre pour la table de multiplication :"));


if (!isNaN(chiffre)) {
    for (let i = 1; i <= 10; i++) {
        let resultat = chiffre * i;
        alert(`${chiffre} x ${i} = ${resultat}`);
    }
} else {
    prompt("Veuillez entrer un nombre valide.");
}

