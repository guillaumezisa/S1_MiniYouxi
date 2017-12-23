// traitement de /req_simon_phase_repetition

"use strict";

var fs = require("fs");
require("remedial")
var page;
var marqueur;

var trait = function (req, res, query) {
	var partie ;				// DECOMPRESSION DU JSON
	var redirection ; 		// LA PAGE REDIRIGER
	var tourg ; 				// NOMBRE DE TOUR GENERER
	var tourj ; 				// NOMBRE DE TOUR JOUER
	var listeg ;				// LISTE DE COULEUR GENERER
	var listej ;				// LISTE DE COULEUR JOUER
	var i ;

	// LECTURE DU JSON   
	
	partie = fs.readFileSync("simon_partie_"+query.pseudo+".json");
	partie = JSON.parse( partie );

	// COMPARAISON DES COULEURS GENERER ET COULEURS JOUER
	
	redirection = 1;
	tourg = partie[0];
	tourj = partie[2];
	listeg = partie[1];
	listej = partie[3];

	if ( tourg === tourj ){
		for ( i = 0 ; i < tourj ; i++){
			if ( listeg[i] !== listej[i] ){  
				redirection = 0 ;
			}
		}
	} else {
		redirection = -1 ;
	}
	
	// CREATION DES MARQUEURS

	marqueur = {}
	marqueur.pseudo = query.pseudo
	
	if ( redirection === 0 ){
		marqueur.fin = "<h1> Vous avez perdu , vous avez tenu "+tourg+" tour !</h1>"
	}else if ( redirection === 1 ){


	// ENVOIE DE LA PAGE
	
	page = page.supplant(marqueur)
	page = fs.readFileSync("simon_phase_repetition.html", "UTF-8");
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
