// traitement de /req_tempo_quitter
"use strict";

var fs = require("fs");
require("remedial")
var page;
var marqueur;

var trait = function (req, res, query) {
 	
	fs.unlinkSync("tempo_partie_"+query.pseudo+".json");   
	page = fs.readFileSync("tempo_jouer.html", "UTF-8");
	page = fs.readFileSync("accueil_membre_MiniYouxi.html", "UTF-8");

	marqueur = {}
	marqueur.pseudo = query.pseudo
	page = page.supplant(marqueur)

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
