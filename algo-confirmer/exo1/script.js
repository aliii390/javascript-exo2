
const SYMBOLE = "*";
const RETOUR_LIGNE = "<br>";
 

function lireNombre (id) {
    
    let elNombre = document.getElementById(id);
 
    
    let strNombre = elNombre.value;
 
   
    let nNombre = parseInt(strNombre);
 
   
    return nNombre;
 

 
} 
 
 
function forgerTriangle(nbLignes) {
  
    let strTriangle = "";
 
    
   
    let noLigne = 0;
    let noColonne = 0;
 
    
    while (noLigne <= nbLignes) {
        while (noColonne < noLigne) {
            
            strTriangle += SYMBOLE;
 
            
            noColonne++;
        } 
 
       
        strTriangle += RETOUR_LIGNE;
 
     
        noLigne++;	
 
      
        noColonne = 0;
    } 
 
  
    return strTriangle;    
 
} 
 
 
function afficherTriangle(triangle) {

    let elTriangle = document.getElementById("triangle");
 
  
    elTriangle.innerHTML = triangle;
 
   
 
} 
 
 
function onClickDessineTriangle() {

    let nbLignes = lireNombre("nbLignes");
 
   
    let strTriangle = forgerTriangle(nbLignes);
 
    
    afficherTriangle(strTriangle);    
 
  
 
} 
 
 
