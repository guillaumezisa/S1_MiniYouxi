// traitement de /req_simon_fin

"use strict";

var fs = require("fs");
require("remedial")
var page;
var marqueur;

var trait = function (req, res, query) {
   var partie ;

	// LECTURE DU JSON 

	partie = fs.readFileSync("simon_partie_"+query.pseudo+".json");
	partie = JSON.parse(partie);

	// CREATION DES MARQUEURS
	console.log(partie[4]);
	console.log(typeof partie[4]);
	marqueur = {}
	marqueur.pseudo = query.pseudo
	
	if ( Number(partie[4]) === 0 ){
		marqueur.fin = "Vous avez perdu , Vous avez tenus "+partie[0]+"tours de jeu";
	} else if ( Number(partie[4]) === 1 ){
		marqueur.fin = "Vous avez gagné !!! Vous avez une bonne mémoire !!";
	} else {
		marqueur.fin = "";
	}

	// ENVOIE DE LA PAGE 

	page = fs.readFileSync("simon_fin.html", "UTF-8");
	page = page.supplant(marqueur)
	
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
