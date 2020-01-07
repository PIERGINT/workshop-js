//Fabrication du constructeur.
function personne(nom, prenom, pseudo){
    this.nom=nom;
    this.prenom=prenom;
    this.pseudo=pseudo;
    this.getNomComplet= function (){
        return 'Nom :'+this.nom+ ' / Prénom :'+ this.prenom+ ' / Pseudo :' +this.pseudo;
    }
}

var Jules = new personne ('LEMAIRE', 'Jules', 'jules77');
var Paul = new personne ('LEMAIRE', 'Paul', 'pau44');
console.log(Jules.nom);
console.log(Jules.prenom);
console.log(Jules.pseudo);
console.log(Jules.getNomComplet());

function afficherPersonne(untel) {
console.log(untel.nom);
console.log(untel.prenom);
console.log(untel.pseudo);
console.log(untel.getNomComplet());
}

afficherPersonne(Paul);

Jules.pseudo = 'jules44';
afficherPersonne(Jules);

var age;
afficherPersonne(Jules.age);