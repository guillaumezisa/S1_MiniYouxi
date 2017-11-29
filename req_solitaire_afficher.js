// traitement de /req_solitaire_afficher

"use strict";

var fs = require("fs");
require("remedial")
var page;
var marqueur = {};
var trait = function (req, res, query) {

	page = fs.readFileSync("solitaire_afficher.html", "UTF-8");

	marqueur = fs.readFileSync("./solitaire_origine.json","UTF-8");
	marqueur = JSON.parse(marqueur);

	marqueur.pseudo = query.pseudo
	page = page.supplant(marqueur)

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
