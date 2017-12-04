// traitement de /req_jouer_morpion

"use strict";

var fs = require("fs");
require("remedial")
var page;
var marqueur;

var trait = function (req, res, query) {
    
	page = fs.readFileSync("accueil_membre_MiniYouxi.html", "UTF-8");

	marqueur = {}
	marqueur.pseudo = query.pseudo
	page = page.supplant(marqueur)

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 

	fs.unlinkSync("information_plateau_morpion_" + query.pseudo + ".json");
    fs.unlinkSync("places_disponible_morpion_" + query.pseudo + ".json");
	fs.unlinkSync("position_morpion_" + query.pseudo + ".json");

}

module.exports = trait;
