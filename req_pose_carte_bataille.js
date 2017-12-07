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

var remplacement = function(nombre) {
    switch (nombre) {
	    case "11":
		    return "J";
			break;
		case "12":
		    return "Q";
			break;
		case "13":
		    return "K";
			break;
		default:
		    return nombre;
			break;
		}
};




var choix_couleur = function(chaine) {
    switch (chaine) {
	    case "t":
		    return "trefle";
			break;
		case "co":
		    return "coeur";
			break;
		case "p":
		    return "pique";
		    break;
		case "ca":
		    return "carreau";
			break;
	}
}

var trait = function(req, res, query) {
    
	mains = fs.readFileSync("mains_bataille_" + query.pseudo + ".json", "UTF-8");
	mains = JSON.parse(mains);

	// On pose les cartes sur la table (litéralement)
	pose_joueur = mains.joueur[0];
	mains.joueur.splice(0, 1);
	pose_ordi = mains.ordi[0];
	mains.ordi.splice(0, 1);

	if (pose_joueur[0] === pose_ordi[0]) {
	    resultat = "Égalité";
		mains.joueur.push(pose_joueur);
		mains.ordi.push(pose_ordi);
	} else if (pose_joueur[0] > pose_ordi[0]) {
	    resultat = "Le joueur l'emporte."
		mains.joueur.push(pose_joueur, pose_ordi);
	} else {
	    resultat = "L'ordi l'emporte."
		mains.ordi.push(pose_joueur, pose_ordi);
	}
    
	
	if (mains.joueur.length === 0 || mains.ordi.length == 0) {
	// Si un des deux joueurs a perdu

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

	} else {
	    page = fs.readFileSync("resultat_tour_bataille.html", "UTF-8")

		marqueur.nb_ordi = remplacement(String(pose_ordi[0]));
		marqueur.couleur_ordi = choix_couleur(pose_ordi[1]);
		marqueur.nb_joueur = remplacement(String(pose_joueur[0]));
		marqueur.couleur_joueur = choix_couleur(pose_joueur[1]);

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
