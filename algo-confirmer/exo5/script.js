
const win = 3;
let user;


while (win !== user) {
   user = prompt("Entrez un nombre entre 1 et 3: ");
  if (user == win) {
    alert("Vous avez gagner");
   break;
} else {
    alert("vous avez perdu ");
}



}
