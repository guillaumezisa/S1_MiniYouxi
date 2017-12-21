// traitement de /req_simon_phase_memorisation

"use strict";

var fs = require("fs");
require("remedial")
var page;
var marqueur;

var trait = function (req, res, query) {
    
	page = fs.readFileSync("simon_phase_memorisation.html", "UTF-8");

	marqueur = {}
	marqueur.pseudo = query.pseudo
	page = page.supplant(marqueur)

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
