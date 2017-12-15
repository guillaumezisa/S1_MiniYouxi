// traitement de /req_solitaire_plateau

"use strict";

var fs = require("fs");
require("remedial")
var trait = function (req, res, query) {
	
	// CREATION DU PLATEAU DE JEU
	
	var plateau ;
	plateau = [
					[0,0,1,1,1,0,0],
					[0,0,1,1,1,0,0],
					[1,1,1,1,1,1,1],
					[1,1,1,3,1,1,1],
					[1,1,1,1,1,1,1],
					[0,0,1,1,1,0,0],
					[0,0,1,1,1,0,0],
				];
	
	// ATTRIBUTION DES MARQUEURS DEPUIS LE PLATEAU
	
	var ver ;
	var hor ;
	var marqueur = {};
	marqueur.pseudo = query.pseudo;
	
	for( var ver = 0 ; ver <7 ; ver++){
		for (var hor = 0 ; hor <7 ; hor++){
			if( plateau[ver][hor] === 1){
				marqueur["img"+String(ver)+String(hor)] = "solitaire_p1.png";
			}else if ( plateau[ver][hor] === 2){
				marqueur["img"+String(ver)+String(hor)] = "solitaire_p2.png";
			}else if ( plateau[ver][hor] === 3){
				marqueur["img"+String(ver)+String(hor)] = "solitaire_l.png";
			}
		}
	}
	
	// ENREGISTREMENT DU PLATEAU DE JEU
	
	var here = JSON.stringify(plateau);
	var now = fs.writeFileSync("solitaire_partie_"+query.pseudo+".json", here , "UTF-8");
	
	// ENVOIE DE LA PAGE AVEC LES MARQUEURS
	
	var page;
	page = fs.readFileSync("solitaire_plateau.html", "UTF-8");
	page = page.supplant(marqueur)

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
