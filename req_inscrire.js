//=========================================================================
// Traitement de "req_inscrire"
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
	var password2;
	var page;
	var nouveauMembre;
	var contenu_fichier;
	var listeMembres;
	var i;
	var trouve;
	var pass;
	var pseudo_valide;
	var mdp_valide;

	// ON LIT LES COMPTES EXISTANTS

	contenu_fichier = fs.readFileSync("membres.json", 'utf-8');    
	listeMembres = JSON.parse(contenu_fichier);

	// ON VERIFIE QUE LE COMPTE N'EXISTE PAS DEJA

	trouve = false;
	i = 0;
	while(i<listeMembres.length && trouve === false) {
		if(listeMembres[i].pseudo === query.pseudo) {
			trouve = true;
		}
		i++;
	}

	// On va verifier que les deux passwords correnpondent
    if(query.password === query.password2) {
	    pass = "identique"
	} else {
	    pass = "different"
	}

	// on va verifier que les champs Pseudo er password ne sont pas vide
	if (query.pseudo.length > 0) {
	    pseudo_valide = "oui"
	} else {
	    pseudo_valide = "non"
	}
	if (query.password.length > 0) {
	    mdp_valide = "oui"
	} else {
	    mdp_valide = "non"
	}



	// SI PAS TROUVE, ON AJOUTE LE NOUVEAU COMPTE DANS LA LISTE DES COMPTES et
	// que les MDP sont identique et que pseudo et mdp ne sont pas vide

	if(trouve === false && pass === "identique" && pseudo_valide === "oui" &&
	mdp_valide === "oui") {
		nouveauMembre = {};
		nouveauMembre.pseudo = query.pseudo;
		nouveauMembre.password = query.password;
		nouveauMembre.score = "0" ;
		listeMembres[listeMembres.length] = nouveauMembre;

		contenu_fichier = JSON.stringify(listeMembres);

		fs.writeFileSync("membres.json", contenu_fichier, 'utf-8');
	}


	// ON RENVOIT UNE PAGE HTML 

	if(trouve === true || pass === "different" || pseudo_valide === "non" ||
	mdp_valide === "non") {
		// SI CREATION PAS OK, ON REAFFICHE PAGE FORMULAIRE AVEC ERREUR ou que
		// les passwords sont différents

		page = fs.readFileSync('formulaire_inscription_MiniYouxi.html', 'utf-8');

		marqueurs = {};
		if (trouve === true){
		    marqueurs.erreur = "ERREUR : ce pseudo est déjà utilisé";
	    } else if (pass === "different") {
			marqueurs.erreur = "ERREUR : les mots de passe ne sont pas identique";
		} else if (pseudo_valide === "non") {
			marqueurs.erreur = "ERREUR : le champ Pseudo est vide";
		} else if (mdp_valide === "non") {
			marqueurs.erreur = "ERREUR : le champ Password est vide";
		}	    
		marqueurs.pseudo = query.pseudo;
		page = page.supplant(marqueurs);

	} else {
		// SI CREATION OK, ON ENVOIE PAGE DE CONFIRMATION

		page = fs.readFileSync('confirmation_inscription_MiniYouxi.html', 'UTF-8');

		marqueurs = {};
		marqueurs.pseudo = query.pseudo;
		marqueurs.password = query.password;
		page = page.supplant(marqueurs);
	}

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};

//---------------------------------------------------------------------------

module.exports = trait;
