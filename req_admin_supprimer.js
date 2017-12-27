// traitement de /req_admin_supprimer

"use strict";

var fs = require("fs");
require("remedial")
var page;
var marqueur;

var trait = function (req, res, query) {
	var fichier;
	var listeMembres;
	var i ;

	fichier = fs.readFileSync("membres.json","utf-8");
	listeMembres = JSON.parse(fichier);
	console.log(listeMembres);
	for ( i = 0 ; i < listeMembres.length ; i++ ){
		if ( listeMembres[i].pseudo === query.membre ){
			listeMembres.splice(i,1);
		}
	}
	console.log(listeMembres);
	
	listeMembres = JSON.stringify(listeMembres);
	fs.writeFileSync("membres.json", listeMembres ,"utf-8");
	   
  	// CREATION DE MARQUEURS
	marqueur = {}
	marqueur.pseudo = query.pseudo
	
	// ENVOIE DE LA PAGE
	
	page = fs.readFileSync("admin_supprimer.html", "UTF-8");
	page = page.supplant(marqueur);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
