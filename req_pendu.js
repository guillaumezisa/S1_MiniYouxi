//main pendu

"use strict";

var fs = require("fs");
require("remedial");

var req_pendu = function(req, res, query, pathname) {

	var marqueurs;
	var page;
	var page1;
	var page2;
	var page3;
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
	page1 = fs.readFileSync("pendu_mot.html", "UTF-8");
	page3 = fs.readFileSync("pendu_bouton.html", "UTF-8");

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
	res.writeHead(200, {'Content-Type': 'text/html'});

	if(victoire !== true) {
		marqueurs.pendu = pendu.image[pendu.erreurs];
		marqueurs.motSec = pendu.motAff.join(" ");
		page = page.supplant(marqueurs);
		res.write(page);
	} else {
		marqueurs.motSec = pendu.motAff.join("");
	}
	marqueurs.joueur = query.pseudo;
	page1 = page1.supplant(marqueurs);

	joueur.pendu = pendu;

	for(i = 0; i < membres.length; i++) {

		if(query.pseudo === membres[i].pseudo) {

			membres[i] = joueur;

		}

	}
	fs.writeFileSync("membres.json", JSON.stringify(membres), "UTF-8");
	
	res.write(page1);

	if(victoire !== true && victoire !== false) {

		res.write("<html><br><br><form action = '/req_jouer_pendu' method = 'GET'>");
		for(i = 0; i < pendu.lettre.length; i++) {

			if(pendu.lettre[i].use === false) {

				page2 = fs.readFileSync("pendu_lettre.html", "UTF-8");
				marqueurs.lettre = pendu.lettre[i].l;
				page2 = page2.supplant(marqueurs);
				res.write(page2);

			}

		}
		res.write("<input type = 'hidden'  name = 'pseudo' value = '" + query.pseudo + "'></form>");
		marqueurs.action = "abandonner";


	} else {
		
		if(victoire === true) {
			
			res.write("<html><br><br>Vous avez gagner")

		} else {

			res.write("<html><br><br>Vous avez perdue")

		}

		marqueurs.action = "rejouer";

	}

	page3 = page3.supplant(marqueurs);
	res.write(page3);
	res.end();

}

module.exports = req_pendu;
