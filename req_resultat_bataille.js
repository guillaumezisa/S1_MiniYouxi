// traitement de la requite /req_resultat_bataille

"use strict";

var fs = require("fs");
require("remedial")
var mains;
var marqueur = {}
var page

var trait = function(req, res, query) {
    
	mains = fs.readFileSync("mains_bataille_" + query.pseudo + ".json", "UTF-8");
	mains = JSON.parse(mains)
    
	// On définis les marqueurs
	marqueur.pseudo = query.pseudo
	marqueur.joueur = mains.joueur.length
	marqueur.ordi = mains.ordi.length

	if (mains.joueur.length === mains.ordi.length) {
	    marqueur.winer = "Egalité, vous avez le même nombre de carte"
	} else if (mains.joueur.length > mains.ordi.length) {
	    marqueur.winer = "le gagnant est " + query.pseudo
	} else if (mains.joueur.length < mains.ordi.length) {
	    marqueur.winer = "le gagnant est ordi"
	}

	// On va renvoyé la page
	page = fs.readFileSync("resultat_bataille.html", "UTF-8");
	page = page.supplant(marqueur);

	res.writeHead(200, {"Content-Type": "text/html"});
	res.write(page);
	res.end();

}

module.exports = trait
