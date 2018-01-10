//main pendu

"use strict";

var fs = require("fs");
require("remedial");
var url = require("url");

var req_pendu = function(req, res, query) {

	var marqueurs = {};
	var page;
	var page1;
	var page2;
	var page3;
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
		page1 = fs.readFileSync("pendu_mot.html", "UTF-8");
		page3 = fs.readFileSync("pendu_bouton.html", "UTF-8");

		if(pathname === "/req_pendu") {
			
			pendu.motAff = [];

			pendu.motSec = pendu.mots[Math.floor(Math.random() * pendu.mots.length)];

			pendu.motAff[0] = pendu.motSec[0];
			for(i = 1; i < pendu.motSec.length; i++) {

				pendu.motAff[i] = "_";

			}

		} else if(pathname === "/req_jouer_pendu"){

			var présence = false;

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

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write("<html><head><link rel='stylesheet'href='style.css'/><title>Pendu</title></head><body>");

		marqueurs.joueur = query.pseudo;

		fs.writeFileSync("pendu_partie" + query.pseudo + ".json", JSON.stringify(pendu), "UTF-8");

			
		if(victoire === true || victoire === false) {

			marqueurs.action = "Rejouer";
			marqueurs.action2 = "";

		} else {

			marqueurs.action = "Abandonner";
			marqueurs.action2 = "_abandon";

		}

		page3 = page3.supplant(marqueurs);
		res.write(page3);

		if(victoire !== true) {
			marqueurs.pendu = "pendu" + pendu.erreurs + ".png";
			marqueurs.motSec = "";

			if(victoire !== false) {

				marqueurs.motSec = pendu.motAff.join(" ");
				res.write(page);

			}

			page1 = page1.supplant(marqueurs);
			res.write(page1);
		}

		if(victoire === true) {
				
			res.write("<br><br><center>Vous avez gagner, le mot secret etait : " + pendu.motSec + ".");

		} else if(victoire === false) {

			res.write("<center>Vous avez perdu, le mot secret etait : " + pendu.motSec + ".");

		}

		if(victoire !== true && victoire !== false) {

			res.write("<br><br><form action = '/req_jouer_pendu' method = 'GET'>");
			for(i = 0; i < pendu.lettre.length; i++) {

				if(pendu.lettre[i].use === false) {

					page2 = fs.readFileSync("pendu_lettre.html", "UTF-8");
					marqueurs.lettre = pendu.lettre[i].l;
					page2 = page2.supplant(marqueurs);
					res.write(page2);

				}

			}

		}

			res.write("<input type = 'hidden'  name = 'pseudo' value = '" + query.pseudo + "'></form>");

		res.write("</body></html>");
		res.end();
		
	}

}

module.exports = req_pendu;
