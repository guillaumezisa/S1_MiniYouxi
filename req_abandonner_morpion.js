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

	var origine_marqueur = fs.readFileSync("information_plateau_morpion_origine.json", "UTF-8");
	var origine_places = fs.readFileSync("places_disponible_morpion_origine.json", "UTF-8");
	var origine_position = fs.readFileSync("position_morpion_origine.json", "UTF-8");

	fs.writeFileSync("information_plateau_morpion.json", origine_marqueur, "UTF-8");
    fs.writeFileSync("places_disponible_morpion.json", origine_places, "UTF-8");
	fs.writeFileSync("position_morpion.json", origine_position, "UTF-8");

}

module.exports = trait;
