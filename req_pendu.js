//main pendu

"use strict";

var fs = require("fs");
require("remedial");

var req_pendu = function(req, res, query, pathname) {

	var marqueurs;
	var page;
	var i;
	var pendu;
	var membres;
	var joueur;
	var victoire;
	membres = JSON.parse(fs.readFileSync("membres.json", "UTF-8"));
	for(i = 0;i < membres.length; i++) {

		if(query.pseudo === membres[i].pseudo) {

			joueur = membres[i]

		}

	}

	page = fs.readFileSync("pendu.html", "UTF-8");

	pendu = JSON.parse(fs.readFileSync("pendu.json", "UTF-8"));

	if(pathname === "/req_pendu") {
		
		pendu.motAff = []

		pendu.motSec = pendu.mots[Math.floor(Math.random() * pendu.mots.length)]

		for(i = 0; i < pendu.motSec.length; i++) {

			pendu.motAff[i] = "_"

		}

	} else if(pathname === "/req_jouer_pendu"){

		var présence = false;

		pendu = joueur.pendu;

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

	marqueurs = {};
	marqueurs.pendu = pendu.image[pendu.erreurs];
	marqueurs.joueur = query.pseudo;
	marqueurs.motSec = pendu.motAff.join(" ");
	page = page.supplant(marqueurs);

	joueur.pendu = pendu

	for(i = 0; i < membres.length; i++) {

		if(query.pseudo === membres[i].pseudo) {

			membres[i] = joueur;

		}

	}
	fs.writeFileSync("membres.json", JSON.stringify(membres), "UTF-8");

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);

	if(victoire !== true && victoire !== false) {

		res.write("<html><br><br><form action = '/req_jouer_pendu' method = 'GET'>");
		for(i = 0; i < pendu.lettre.length; i++) {

			if(pendu.lettre[i].use === false) {

				res.write("<button name = 'lettre' value = " + pendu.lettre[i].l + ">" + pendu.lettre[i].l + "</button>");

			}

		}
		res.write("<input type = 'hidden'  name = 'pseudo' value = '" + query.pseudo + "'></form>");
		res.write("<br><br><form action = '/req_pendu' method = 'GET'>");
		res.write("<button name = 'abandonner' value = 'pendu'>abandonner</button>");
		res.write("<input type = 'hidden'  name = 'pseudo' value = '" + query.pseudo + "'></form>");

	} else {
		
		if(victoire === true) {
			
			res.write("<html><br><br>Vous avez gagner")

		} else {

			res.write("<html><br><br>Vous avez perdue")

		}

		res.write("<html><br><br><form action = '/req_pendu' method = 'GET'>");
		res.write("<button name = 'rejouer' value = 'pendu'>rejouer</button>");
		res.write("<input type = 'hidden'  name = 'pseudo' value = '" + query.pseudo + "'></form>");

	}

	res.write("<br><br><form action = '/req_accueil' method = 'GET'>");
	res.write("<button name = 'quitter' value = 'vtff'>quitter</button>");
	res.write("<input type = 'hidden'  name = 'pseudo' value = '" + query.pseudo + "'></form>");
	res.end();

}

module.exports = req_pendu;
