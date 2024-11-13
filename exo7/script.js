

function calcule(){
   let pointure = document.getElementById("shoeSize").value;
   let naisance = document.getElementById("yearOfBirth").value;

   let multiplier = pointure * 2;
    let mResult = multiplier + 5;
    let leTout = mResult * 50;

    let nSoustrait = leTout - naisance;
   
    let fin = nSoustrait + 1766;

    alert(`le resultat ${fin}`);

    
    
}

let bouton = document
    .getElementById("submit")
    .addEventListener("click", calcule);