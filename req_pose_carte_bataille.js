// traitemet de /req_pose_carte_bataille

"use strict";

var fs = require("fs");
require("remedial");
var mains;
var pose_joueur;
var pose_ordi;
var resultat;
var page;
var marqueur = {}


var trait = function(req, res, query) {
    
	mains = fs.readFileSync("mains_bataille_" + query.pseudo + ".json", "UTF-8");
	mains = JSON.parse(mains);

	pose_joueur = mains.joueur[0];
mains.joueur.splice(0, 1);
	pose_ordi = mains.ordi[0];
	mains.ordi.splice(0, 1);

	if (pose_joueur[0] > pose_ordi[0]) {
	    resultat = "Le joueur l'emporte."
		mains.joueur.push(pose_joueur, pose_ordi);
	} else {
	    resultat = "L'ordi l'emporte."
		mains.ordi.push(pose_joueur, pose_ordi);
	}
    
	
	if (mains.joueur.length === 0 || mains.ordi.length == 0) {

    // faire la condition de fin de partie et faire le bouton abandoner et un
	// bouton reultat en cours de partie

	} else {
	    page = fs.readFileSync("resultat_tour_bataille.html", "UTF-8")

		marqueur.ordi = String(pose_ordi[0]) + pose_ordi[1];
		marqueur.joueur = String(pose_joueur[0]) + pose_joueur[1];
		marqueur.resultat = resultat;
		marqueur.pseudo = query.pseudo

		page = page.supplant(marqueur)

		res.writeHead(200, {"Content-Type": "text/html"});
		res.write(page);
		res.end();
	}

	// On ré-écris les mains dans un fichier
	mains = JSON.stringify(mains)
	fs.writeFileSync("mains_bataille_" + query.pseudo + ".json", mains, "UTF-8");
}

module.exports = trait;
