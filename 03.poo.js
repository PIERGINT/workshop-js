//Fabrication du constructeur Personne.
function personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return 'Nom : ' + this.nom + ' / Prénom : ' + this.prenom + ' / Pseudo : ' + this.pseudo;
    }
}

//Instanciation de Jules et Paul.
var Jules = new personne('LEMAIRE', 'Jules', 'jules77');
var Paul = new personne('LEMAIRE', 'Paul', 'pau44');
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

//Ajout d'une propriété âge.
var age;
console.log(Jules.age);

personne.prototype.age = 'NON RENSEIGNE';
console.log(Jules.age);
personne.prototype.age = '30';
console.log(Jules.age);

//Ajout d'une méthode: obtenir les initiales.

function getInitiales() {
    return this.prenom.charAt(0) + this.nom.charAt(0);
};
personne.prototype.getInitiales = getInitiales;
console.log(Jules.getInitiales());

//Elaboration d'un objet sans constructeur.

var Robert = {
    prenom: 'Robert',
    nom: 'LEPREFET',
    pseudo: "robert77",
    getNomComplet: function () {
        return 'Nom : ' + this.nom + ' / Prénom : ' + this.prenom + ' / Pseudo : ' + this.pseudo;
    }
}

afficherPersonne(Robert);

//Héritage et fabrication du constructeur Client.
function Client(nom, prenom, pseudo, numeroClient) {
    personne.call(this, nom, prenom, pseudo)
    this.numeroClient = numeroClient;
    this.getNomComplet = function () {
        return 'Nom : ' + this.nom + ' / Prénom :' + this.prenom + ' / Pseudo : ' + this.pseudo;


    }
    this.getInfos = function () {
        return  ' Numéro de Client : ' + this.numeroClient +'/  Nom : ' + this.nom + ' / Prénom : ' + this.prenom;
    }
}

var Steve = new Client ('LUCAS', 'Steve', 'steve44', 'A1');
afficherPersonne(Steve);

console.log(Steve.numeroClient);
console.log(Steve.getInfos());

