//analyser le pfc 

"use strict"

var fs = require ("fs"); 
require ('remedial') ; 

var trait = function (request, response, query) {

	var page;
	var CO ;
	var marqueurs = {} ; 
	var comparaison;
	var CJ ;

CJ = Number (query.valeur_joueur)

CO = Math.floor(Math.random()*3)+1

if (CJ === CO ){
	marqueurs.gagnant = "égalité"
} else if ((CJ === 1 && CO === 3) || (CJ === 2 && CO === 1) || (CJ === 3 && CO === 2)){
	marqueurs.gagnant = "Bien jouer le joueur"
} else if ((CO === 1 && CJ === 3) || (CO === 2 && CJ === 1) || (CO === 3 && CO === 2)){
	marqueurs.gagnant = "Perdu Bien jouer Ordi"
}

if (CJ === 1){
	marqueurs.img_joueur = "index.jpeg"
} else if (CJ === 2){
	marqueurs.img_joueur = "feuille.jpg"
} else if (CJ === 3) {
	marqueurs.img_joueur = "ciseaux.jpg"
}

if (CO === 1 ){
	marqueurs.img_ordi = "index.jpeg"
} else if (CJ === 2){
	marqueurs.img_ordi = "feuille.jpg"
} else if (CJ === 3){ 
	marqueurs.img_ordi = "ciseaux.jpg"
}



page = fs.readFileSync("resulta_pfc.html","utf-8");
page = page.supplant(marqueurs)

response.writeHead(200,{"Content-Type" : " text/html"});
response.write(page);
response.end();

};

module.exports = trait;


