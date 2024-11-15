
let number;

while(Number.isInteger(number) === false ){
    number = Number(prompt("Veuillez saisir un nombre : "));
}


let text  = ` La factorielle de ${number}, notée ${number}!, vaut `;
let resultat = 1 ;

for(let i = 1; i <= number; i += 1){
    console.log(resultat = resultat *i )
}

alert(text + resultat);