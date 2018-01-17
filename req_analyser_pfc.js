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
} else if ((CO === 1 && CJ === 3) || (CO === 2 && CJ === 1) || (CO === 3 && CJ === 2)){
	marqueurs.gagnant = "Perdu Bien jouer Ordi"
} console.log(CO , CJ)

if (CJ === 1){
	marqueurs.img_joueur = "racailloux.png"
} else if (CJ === 2){
	marqueurs.img_joueur = "feuille.png"
} else if (CJ === 3) {
	marqueurs.img_joueur = "ciseaux.png"
}

if (CO === 1 ){
	marqueurs.img_ordi = "racailloux.png"
} else if (CO === 2){
	marqueurs.img_ordi = "feuille.png"
} else if (CO === 3){ 
	marqueurs.img_ordi = "ciseaux.png"
}


marqueurs.pseudo = query.pseudo
page = fs.readFileSync("resultat_pfc.html","utf-8");
page = page.supplant(marqueurs)

response.writeHead(200,{"Content-Type" : " text/html"});
response.write(page);
response.end();

};

module.exports = trait;


