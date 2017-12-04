// traitement de /req_jouer_morpion

"use strict";

var fs = require("fs");
require("remedial")
var page;
var marqueur = {};
var places;
var position;

var trait = function (req, res, query) {
    
	page = fs.readFileSync("plateau_morpion.html", "UTF-8");

	marqueur = fs.readFileSync("./information_plateau_morpion_origine.json", "UTF-8");
	marqueur = JSON.parse(marqueur);

	marqueur.pseudo = query.pseudo;
	page = page.supplant(marqueur);


	// On cree le fichiers pour que le joueur puisse jouer
    marqueur = fs.readFileSync("information_plateau_morpion_origine.json", "UTF-8")
	fs.writeFileSync("information_plateau_morpion_" + query.pseudo + ".json", marqueur, "UTF-8");

    places = fs.readFileSync("places_disponible_morpion_origine.json", "UTF-8")
	fs.writeFileSync("places_disponible_morpion_" + query.pseudo + ".json", places, "UTF-8");

    position = fs.readFileSync("./position_morpion_origine.json", "UTF-8")
	fs.writeFileSync("position_morpion_" + query.pseudo + ".json", position, "UTF-8");


	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 

};

module.exports = trait;
