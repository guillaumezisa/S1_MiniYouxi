// traitement de /req_simon_phase_repetition

"use strict";

var fs = require("fs");
require("remedial")
var page;
var marqueur;

var trait = function (req, res, query) {
   var partie ;
	var bouton ;

	// LECTURE DU JSON

	partie = fs.readFileSync("simon_partie_"+query.pseudo+".json");
	partie = JSON.parse(partie);
	
	// RECUPERATION DU QUERY BUTTON & ASSIGNEMENT DES COULEURS JOUER

	bouton = query.button ; 

	if ( bouton === "blue" ){
		partie[3][partie[2]] = 1;
	}else if ( bouton === "red"){
		partie[3][partie[2]] = 2;
	}else if ( bouton === "green"){
		partie[3][partie[2]] = 3;
	}else if ( bouton === "yellow"){
		partie[3][partie[2]] = 4;
	}
	
	// CREATION DES MARQUEURS 

	marqueur = {}
	marqueur.pseudo = query.pseudo
	
	// ENREGISTREMENT DU JSON
	
	partie[2] = partie[2]+1;
	partie = JSON.stringify(partie);
	fs.writeFileSync("simon_partie_"+query.pseudo+".json", partie , "UTF-8");

	// ENVOIE DE LA PAGE

	page = page.supplant(marqueur)
	page = fs.readFileSync("simon_phase_repetition.html", "UTF-8");

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
