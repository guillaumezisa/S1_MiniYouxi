// traitement de /req_simon_phase_memorisation

"use strict";

var fs = require("fs");
require("remedial");
var page;
var marqueur;

var trait = function (req, res, query) {
	var partie ;		// NOM DU JSON DECOMPRESSER
	var couleur ;		// NUMERO D'UN COULEUR ALEATOIRE
	var tour ;			// NOMBRE DE TOURS
	var image ;			// LISTE RECONVERTIE EN STRING DE BOUTON
	var i;				

	// CHARGEMENT DU JSON
   
	partie = fs.readFileSync("simon_partie_"+query.pseudo+".json");
	partie = JSON.parse( partie );
	
	
	// GENERATION D'UNE COULEUR ALEATOIRE
	
	tour = partie[0];
	couleur = Math.floor(Math.random()*4+1);	
	partie[1][tour] = couleur;

	console.log("TOUR"+tour);
	console.log("COULEUR"+couleur);
	console.log("PARTIE"+ partie[1]);
	console.log("PARTIE DU TOUR "+partie[1][tour]);
	
	// DECHARGEMENT DE LA LISTE DANS UNE STRING 
	
	for ( i = 0 ; i < tour+1 ; i++ ){
		console.log("BOUCLE2");
		if (i === 0){
			image = partie[1][i];
		} else {
			image = image+partie[1][i];
		}
	} 
	 console.log(image);
	// CREATION DES MARQUEURS
	
	marqueur = {}
	marqueur.pseudo = query.pseudo
	marqueur.couleur = image ;
	
	// ENREGISTREMENT DU JSON
	
	partie[0] = [Number(partie[0]+1)];	
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
