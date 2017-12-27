// traitement de /req_admin_accueil

"use strict";

var fs = require("fs");
require("remedial")
var page;
var marqueur;

var trait = function (req, res, query) {
	var fichier;
	var listeMembres;
	var liste ;
	var ligne ;
	var string ;
	var supprimer;
	var modifier;
	var i ;

	fichier = fs.readFileSync("membres.json","utf-8");
	listeMembres = JSON.parse(fichier);
	// CREATION DU TABLEAU
	
	liste = [] ;
	string = "<table><tr><th>PSEUDO</th><th>PASSWORD</th><th>SUPPRIMER</th></tr>";
	for ( i = 0 ; i < listeMembres.length ; i++ ){
		ligne ="<tr><td>"+listeMembres[i].pseudo+"</td><td>"+listeMembres[i].password+"</td>";
		supprimer ="<td><form action='req_admin_supprimer'method='GET'><input type='hidden' name='membre' value='"+listeMembres[i].pseudo+"'><button class='button6'>supprimer</button></form></td></tr>";
		
		liste[i] = ligne ;
		string = String(string)+String(liste[i])+String(supprimer);
	}
		
  	// CREATION DE MARQUEURS
	
	marqueur = {};
	marqueur.pseudo = query.pseudo;
	marqueur.membres = string+String("</table>");
	
	// ENVOIE DE LA PAGE
	
	page = fs.readFileSync("accueil_admin_MiniYouxi.html", "UTF-8");
	page = page.supplant(marqueur)

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
