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
	
	if ( partie[0] === 1){
		partie[2] = [0];
	}
	
	
	// RECUPERATION DU QUERY BUTTON & ASSIGNEMENT DES COULEURS JOUER
	
	console.log(partie[2]);


	partie[2] = [Number(partie[2])+1];
	bouton = query.button ; 

	if ( bouton === "blue" ){
		partie[3][partie[2]] = 1;
		partie[2] = [Number(partie[2])+1];
	}else if ( bouton === "red"){
		partie[3][partie[2]] = 2;
		partie[2] = [Number(partie[2])+1];
	}else if ( bouton === "green"){
		partie[3][partie[2]] = 3;
		partie[2] = [Number(partie[2])+1];
	}else if ( bouton === "yellow"){
		partie[3][partie[2]] = 4;
		partie[2] = [Number(partie[2])+1];
	}
	console.log(partie[2]);
	
	// CREATION DES MARQUEURS 

	marqueur = {}
	marqueur.pseudo = query.pseudo
	
	// ENREGISTREMENT DU JSON
	
	partie = JSON.stringify(partie);
	fs.writeFileSync("simon_partie_"+query.pseudo+".json", partie , "UTF-8");

	// ENVOIE DE LA PAGE

	page = fs.readFileSync("simon_phase_repetition.html", "UTF-8");
	page = page.supplant(marqueur)

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
