
let nom = ["jérémy", "hassan" , "vincent"];



for (let i = 0; i < nom.length; i++) {
    let ligne = ""; 
    let count = 0;
    
    while (count < i + 1) {
        ligne += nom[i] + " "; 
        count++;
    }
    
    console.log(ligne.trim());  
}