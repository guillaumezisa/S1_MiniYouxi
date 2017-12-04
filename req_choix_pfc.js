"use strict"

var fs = require("fs")
require = ('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var page;


	page = fs.readFileSync("");


	marqueurs = {}
	marqueurs.erreur = "";
	marqueurs.pseudo = "";
	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type' : 'text/html' });
	res.write(page);
	res.end();
};

module.exports = trait;
