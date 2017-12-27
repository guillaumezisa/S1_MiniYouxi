//=========================================================================
// Traitement de "req_identifier"
// Auteur : P. Thiré
// Version : 09/10/2015
//=========================================================================

"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var pseudo;
	var password;
	var page;
	var membre;
	var contenu_fichier;
	var listeMembres;
	var i;
	var trouve;

	// VARIABLE ADMIN

	var ligne ; 			// LIGNE DU MEMBRE
	var liste ;				// LISTE DE LIGNES DES MEMBRES
	var string ;    		// STRING DE LA LISTE
	var supprimer ;		// BOUTON SUPPRIMER MEMBRE

	// ON LIT LES COMPTES EXISTANTS

	contenu_fichier = fs.readFileSync("membres.json", 'utf-8');    
	listeMembres = JSON.parse(contenu_fichier);

	// On vérifie le compte admin
	if (query.pseudo === "root" && query.password === "toor") {
		var req_afficher_page_admin = require("./req_afficher_page_admin.js");
		page = req_afficher_page_admin(req, res, query);
	} else {

		// ON VERIFIE QUE LE PSEUDO/PASSWORD EXISTE

		trouve = false;
		i = 0;
		while(i<listeMembres.length && trouve === false) {
			if(listeMembres[i].pseudo === query.pseudo) {
				if(listeMembres[i].password === query.password) {
					trouve = true;
				}
			}
			i++;
		}


		// ON RENVOIT UNE PAGE HTML 

		if(trouve === false) {
			// SI IDENTIFICATION INCORRECTE, ON REAFFICHE PAGE ACCUEIL AVEC ERREUR

			page = fs.readFileSync('accueil_MiniYouxi.html', 'utf-8');

			marqueurs = {};
			marqueurs.erreur = "ERREUR : compte ou mot de passe incorrect";
			marqueurs.pseudo = query.pseudo;
			page = page.supplant(marqueurs);

		} else {
			// SI IDENTIFICATION OK, ON ENVOIE PAGE ACCUEIL MEMBRE

			page = fs.readFileSync('accueil_membre_MiniYouxi.html', 'UTF-8');

			marqueurs = {};
			marqueurs.pseudo = query.pseudo;
			page = page.supplant(marqueurs);
		}
	}



	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};

//---------------------------------------------------------------------------

module.exports = trait;
