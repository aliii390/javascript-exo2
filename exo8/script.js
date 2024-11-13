
function majeur() {
    let  age = document.getElementById("age").value;
    

    if(age >= 18){
        alert("Vous etes majeur");
       
    } else {
        alert("Vous etes mineur");
    }
}


let bouton = document
    .getElementById("submit")
    .addEventListener("click", majeur);