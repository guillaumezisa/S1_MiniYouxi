// traitement de /req_solitaire_plateau_selection

"use strict";

var fs = require("fs");
require("remedial")

var trait = function (req, res, query) {
	var marqueur = [];
	var page;
	var lat;                     // Latéral
	var hor;                     // Horizontale
	var coo;                     // Coordonée
	var ps							  // Pion Selectionner
	var plateau ;
	var now ;
	var plateau ;
	
	// CHARGEMENT DU JSON
	now = fs.readFileSync("solitaire_partie_"+query.pseudo+".json","UTF-8");
	plateau = JSON.parse(now);
	
	// SELECTIONNE OU DESELECTIONNE UN PION
	
	coo = query.place;
	
	if ( plateau[coo[0]][coo[1]] === 1 ){
		// PASSIF -> ACITF
		plateau[coo[0]][coo[1]] = 2;
	} else if ( plateau[coo[0]][coo[1]] === 2 ){
		// ACTIF -> PASIF
		plateau[coo[0]][coo[1]] = 1;
	} else if ( plateau[coo[0]][coo[1]] === 3 ){
		plateau[coo[0]][coo[1]] = 3;
	}
	

	// ASSIGNEMENT DES MARQUEURS
	marqueur = {};	
	marqueur.pseudo = query.pseudo;

	for ( lat = 0 ; lat < 7 ; lat ++){
		for ( hor = 0 ; hor < 7 ; hor++ ){
			if(plateau[lat][hor] === 1){
				marqueur["img"+String(lat)+String(hor)] = "solitaire_p1.png";
			}else if(plateau[lat][hor] === 2){
				marqueur["img"+String(lat)+String(hor)] = "solitaire_p2.png";
			}else if(plateau[lat][hor] === 3){
				marqueur["img"+String(lat)+String(hor)] = "solitaire_l.png";
			}
		}
	}	

	// MODIFICATION DU JSON
	now  = JSON.stringify(plateau);
	plateau =fs.writeFileSync("solitaire_partie_"+query.pseudo+".json",now,"utf-8")

	// ENVOIE DE LA PAGE	
	page = fs.readFileSync("solitaire_plateau_selection.html", "UTF-8");
	page = page.supplant(marqueur)
	
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
