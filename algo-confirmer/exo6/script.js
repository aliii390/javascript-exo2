const win = 15;
let user;


while (win !== user) {
   user = prompt("Entrez un nombre entre 10 et 20: ");
   
   if (user == win) {
     alert("Vous avez gagner");
    break;
 } else {
     alert("vous avez perdu ");
 }
   if(user <= 10){
    alert("Plus grand")
   }else{
    alert("plus petit")
   }





}
