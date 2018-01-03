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
	
	marqueur = {}
	marqueur.pseudo = query.pseudo
	
	if ( partie[4] === "v" ){
		marqueur.fin = "<center>Vous avez gagné !!! Vous avez une bonne mémoire !<br><br><img src='simon_gagner.jpg'></center>";
	} else {
		marqueur.fin = "<center>Vous avez perdu , Vous avez tenus "+partie[0]+" tours de jeu<br><br><img src='simon_perdu.png'></center>";
	}

	// ENVOIE DE LA PAGE 

	page = fs.readFileSync("simon_fin.html", "UTF-8");
	page = page.supplant(marqueur)
	
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
