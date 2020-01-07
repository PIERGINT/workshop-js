
//Création variable ayant pour valeur un tableau de noms de villes françaises.
var villes= new Array('nantes', 'paris','saint-nazaire', 'angers', 'le mans');

//1) FONCTION FOREACH
//Affichage de la liste des villes.
villes.forEach(function(element) {
console.log(element);
});

//Autre manière d'affichage possible.
function afficher (element, index, array){
     console.log(element);
}
villes.forEach(afficher);

//2) FONCTION EVERY
//Vérifier si toutes les villes contiennent la lettre a.
var lettreADansToutesLesVilles = function (element) {
return element.includes('a');

}
var result = villes.every(lettreADansToutesLesVilles);
console.log('lettreADansToutesLesVilles='+ result);

//3) FONCTION SOME
//Vérifier si au moins une ville contient un tiret.

var auMoinsUneVilleAvecUnTiret = villes.some(function(element){
    return element.includes('-');
});

console.log('auMoinsUneVilleAvecUnTiret='+ auMoinsUneVilleAvecUnTiret);

//4) FONCTION FILTER
//Création d'un tableau avec noms de villes sans tirets et sans espaces.

var villesSansTiretSansEspace = villes.filter(function (element) {
    return !element.includes(' ') && !element.includes('-');
});
console.log('villesSansTiretSansEspace='+ villesSansTiretSansEspace);


//5) CHAÎNAGE DE FONCTIONS
//Création d'un tableau dont la dernière lettre du nom de ville est s et les noms de villes sont en majuscules.

var villesMajusculeSeTerminantParS = villes.filter(function (element) {
    return element.endsWith('s')}).map(function (element) {
        return element.toUpperCase();
});
console.log('villesMajusculeSeTerminantParS='+ villesMajusculeSeTerminantParS);