// Exercice 5.3
// Ecrire un algorithme qui demande un nombre de départ, et qui ensuite affiche les dix nombres suivants. 
// Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27.



N = parseInt(prompt("Entrez un nombre :"));
let i = 0;
console.log("Les 10 nombres suivants sont :");
while (i < 10) {
    i++;
    console.log(N + i);
}
