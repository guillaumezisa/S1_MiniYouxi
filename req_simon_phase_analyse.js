// traitement de /req_simon_phase_repetition

"use strict";

var fs = require("fs");
require("remedial")
var page;
var marqueur;

var trait = function (req, res, query) {
	var partie ;
	var redirection ; 		// LA PAGE REDIRIGER
	
	// LECTURE DU JSON   
	
	partie = fs.readFileSync("simon_partie_"+query.pseudo+".json");
	partie = JSON.parse( partie );

	// COMPARAISON DES COULEURS GENERER ET COULEURS JOUER

	
	
	
	// CREATION DES MARQUEURS

	marqueur = {}
	marqueur.pseudo = query.pseudo
	
	// ENVOIE DE LA PAGE
	
	page = page.supplant(marqueur)
	page = fs.readFileSync("simon_phase_repetition.html", "UTF-8");
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
