// traitement de /req_simon_phase_memorisation

"use strict";

var fs = require("fs");
require("remedial");
var page;
var marqueur;

var trait = function (req, res, query) {
	var partie ;		// NOM DU JSON DECOMPRESSER
	var couleur ;		// NUMERO D'UN COULEUR ALEATOIRE

	// CHARGEMENT DU JSON
   
	partie = fs.readFileSync("simon_partie_"+query.pseudo+".json");
	partie = JSON.parse( partie );
	
	// NOUVEAU TOUR DE JEU
	
	partie[0] = [Number(partie[0]+1)];
	
	// GENERATION D'UNE COULEUR ALEATOIRE
	
	couleur = Math.floor(Math.random()*4+1);	
	partie[1].push(couleur);

	if (partie[0] === /// IL FAUT QUE LA LENGHT DEPARTIR1 SOIT = A PARTI 0
	
	// CREATION DES MARQUEURS
	
	marqueur = {}
	marqueur.pseudo = query.pseudo
	
	
	// ENREGISTREMENT DU JSON
	
	partie =JSON.stringify(partie);
	fs.writeFileSync("simon_partie_"+query.pseudo+".json",partie,"UTF-8");
	
	
	// ENVOIE DE LA PAGE
	page = fs.readFileSync("simon_phase_memorisation.html", "UTF-8");
	page = page.supplant(marqueur)

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
