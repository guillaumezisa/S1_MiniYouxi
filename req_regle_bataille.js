// traitement de la requere /req_afficher_regle_bataille

"use strict";

var fs = require("fs");
var page;
var marqueur = {};
require("remedial");

var trait = function (req, res, query) {

    page = fs.readFileSync("afficher_regle_bataille.html", "UTF-8");

	marqueur.pseudo = query.pseudo;
	page = page.supplant(marqueur);

	res.writeHead(200, {"Content-Type": "text/html"});
	res.write(page);
	res.end()
};

module.exports = trait;
