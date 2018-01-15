//main pendu

"use strict";

var fs = require("fs");
require("remedial");
var url = require("url");

var req_pendu = function(req, res, query) {

	var marqueurs = {};
	var page;
	var i;
	var pendu;
	var victoire;
	var requete = url.parse(req.url, true);
	var pathname = requete.pathname;

	pendu = JSON.parse(fs.readFileSync("pendu.json", "UTF-8"));
	pendu.motAff = ["a","b"];

	if(pathname === "/req_quitter_pendu") {

		fs.unlinkSync("pendu_partie" + query.pseudo + ".json");

		page = fs.readFileSync("accueil_membre_MiniYouxi.html", "UTF-8");
		marqueurs.pseudo = query.pseudo
		page = page.supplant(marqueurs);

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(page);
		res.end();

	} else if(pathname === "/req_abandon_pendu") {

		pendu = JSON.parse(fs.readFileSync("pendu_partie" + query.pseudo + ".json", "UTF-8"));
		console.log(pendu.motAff);

		page = fs.readFileSync("abandon_pendu.html", "UTF-8");
		marqueurs.joueur = query.pseudo;
		marqueurs.motsecret = pendu.motSec;
		page = page.supplant(marqueurs);

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(page);
		res.end();

	} else {

		page = fs.readFileSync("pendu.html", "UTF-8");

		//initialisation de la partie
		if(pathname === "/req_pendu") {
			
			pendu.motAff = [];

			pendu.motSec = pendu.mots[Math.floor(Math.random() * pendu.mots.length)];

			pendu.motAff[0] = pendu.motSec[0];
			for(i = 1; i < pendu.motSec.length; i++) {

				pendu.motAff[i] = "_";

			}

			marqueurs.titre = "Le Pendu";
			marqueurs.règle = "Vous devez trouver le mot secret avant d'etre pendu.";

		//jeu + victoire/défaite
		} else if(pathname === "/req_jouer_pendu"){

		//vérification lettres/conditions victoire/défaite
			var présence = false;

			marqueurs.titre = "Le Pendu";
			marqueurs.règle = "Vous devez trouver le mot secret avant d'etre pendu.";

			pendu = JSON.parse(fs.readFileSync("pendu_partie" + query.pseudo + ".json", "UTF-8"));

			for(i = 0; i < pendu.lettre.length; i++) {

				if(pendu.lettre[i].l === query.lettre) {

					pendu.lettre[i].use = true;

				}

			}

			for(i = 0; i < pendu.motSec.length; i++) {

				if(query.lettre === pendu.motSec[i]) {

					pendu.motAff[i] = query.lettre;
					présence = true;

				}

			}

			if(présence === false) {

				pendu.erreurs++;

			}

			if(pendu.motAff.join("") === pendu.motSec) {

				victoire = true;

			} else if(pendu.erreurs === 11) {

				victoire = false;

			}

		}


		marqueurs.joueur = query.pseudo;
		marqueurs.lettre = "";

		fs.writeFileSync("pendu_partie" + query.pseudo + ".json", JSON.stringify(pendu), "UTF-8");

		//affichage bouton
		if(victoire === true || victoire === false) {

			marqueurs.titre = "";
			marqueurs.règle = "";
			marqueurs.action = "Rejouer";
			marqueurs.action2 = "";

		} else {

			marqueurs.action = "Abandonner";
			marqueurs.action2 = "_abandon";

		}

		//affichage jeu
		if(victoire !== true) {
			marqueurs.pendu = "pendu" + pendu.erreurs + ".png";

			if(victoire !== false) {

				marqueurs.motSec = pendu.motAff.join(" ");

				for(i = 0; i < pendu.lettre.length; i++) {

					if(pendu.lettre[i].use === false) {

						marqueurs.lettre = marqueurs.lettre + "<button class= 'button4' name = 'lettre' value = '" + pendu.lettre[i].l + "'>" + pendu.lettre[i].l + "</button>";

					}

				}

			}

		//message victoire/défaite
		} else if(victoire === true) {
				
			marqueurs.pendu = 'victoire_pendu.jpg';
			marqueurs.motSec = "Vous avez gagner, le mot secret etait : " + pendu.motSec + "."

		} else {

			marqueurs.motSec = "Vous avez perdu, le mot secret etait : " + pendu.motSec + "."

		}

		page = page.supplant(marqueurs);

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(page);
		res.end();
		
	}

}

module.exports = req_pendu;
