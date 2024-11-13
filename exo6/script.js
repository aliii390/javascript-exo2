function resteDivision() {
    let diviseur = document.getElementById("firstNumber").value;
    let dividende = document.getElementById("secondNumber").value;
  
    alert(dividende + "\n" + diviseur + "\n" + (dividende % diviseur));
  }
  
  let bouton = document
    .getElementById("submit")
    .addEventListener("click", resteDivision);