// traitement de /req_simon_regle

"use strict";

var fs = require("fs");
require("remedial")
var page;
var marqueur;

var trait = function (req, res, query) {
 	var partie ;
		
	// CREATION & ENREGISTREMENT DU FICHIER JSON
	
	partie = [
					[0],										// NOMBRE DE TOURS
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0],	// LES COULEURS
					[0],										// NOMBRE DE REPETITION
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0],	// LES COULEURS JOUÉ PAR LE JOUEUR
				] ;
	
	partie = JSON.stringify(partie);
	fs.writeFileSync("simon_partie_"+query.pseudo+".json", partie , "UTF-8");
	   
  	// CREATION DE MARQUEURS
	marqueur = {}
	marqueur.pseudo = query.pseudo
	
	// ENVOIE DE LA PAGE
	
	page = fs.readFileSync("simon_regle.html", "UTF-8");
	page = page.supplant(marqueur)

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
