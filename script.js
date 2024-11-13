




 let lastName = document.getElementById('#lastname');
 let firstName = document.getElementById('#firstname');
let city = document.getElementById('#city');



 

 document.getElementById("submit").addEventListener("click", function(Bonjour){
     let nom = "";
   while(!nom){
       nom = prompt("Quel est votre nom");
    }

    const confirmation = confirm(`etes vous sur que  ${nom} est votre nom`);

    if(confirmation){
       alert(`Bonjour  ${nom}`) ;
    }
 })








