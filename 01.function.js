console.log("01-Fonctions");
var nombre1 = 10;
var nombre2 = 20;
function additionner(nb1, nb2) {
    return nb1 + nb2;

}
var resultat1 = additionner(nombre1, nombre2);
console.log('resultat1=' + resultat1);

var somme = additionner;
var resultat2 = somme(nombre1, nombre2);
console.log('resultat2=' + resultat2);

function multiplier(nba, nbb) {
    return nba * nbb;
}
var multiplication = multiplier;
var resultat3 = multiplication(nombre1, nombre2);
console.log('resultat3=' + resultat3);

var good = multiplier;
var resultat3bis = good(nombre1, nombre2);
console.log('resultat3bis=' + resultat3bis);


function afficherOperation(nomOperation, operation, nb1, nb2) {
    console.log(nomOperation + '('+nb1+','+nb2+') = '+operation(nb1, nb2));

}
afficherOperation('Somme', somme, 20, 40);
afficherOperation('Multiplication', function (a,b){
    return a*b;
},  10, 20);
