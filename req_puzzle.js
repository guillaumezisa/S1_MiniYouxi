//req puzzle

"use strict";

require("remedial");
var fs = require("fs");

var req_puzzle = function(req, res, query) {

	var page;
	var marqueurs = {};
	
	if(query.puzzle === "jouer") {

		page = fs.readFileSync("puzzle.html", "UTF-8");

		marqueurs.pseudo = query.pseudo;
		page = page.supplant(marqueurs);

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(page);
		res.end();

	} else {

		page = fs.readFileSync("accueil_membre_MiniYouxi.html", "UTF-8");

		marqueurs.pseudo = query.pseudo;
		page = page.supplant(marqueurs);

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(page);
		res.end();

	}

}

module.exports = req_puzzle;
