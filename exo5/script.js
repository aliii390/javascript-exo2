// let partieEntiere = Math.floor(nombre1);

// let resultat = partieEntiere * nombre2;

// alert("Le résultat est : " + resultat);

// function multiplier(){
//     let nombre1 = document.getElementById("firstNumber").value;
//     let nombre2 = document.getElementById("secondNumber").value;

//     let partieEntiere = Math.floor(nombre1);

//     let resultat = partieEntiere * nombre2;

// }

function resteDivision() {
    let diviseur = document.getElementById("firstNumber").value;
    let dividende = document.getElementById("secondNumber").value;
    
    
    
    let flott = Math.floor(diviseur);
    let flottDeux = Math.floor(dividende);
    
      alert(flottDeux + "\n" + flott + "\n" + flottDeux * flott);
}


let bouton = document
  .getElementById("submit")
  .addEventListener("click", resteDivision);
