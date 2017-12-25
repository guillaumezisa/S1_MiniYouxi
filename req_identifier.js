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

	// VERIFICATION DU COMPTE ADMIN 
	// DSL POUR LE CODE DEGEU <3

	liste = [];
	string = "<table><tr><th>PSEUDO</th><th>PASSWORD</th><th>MODIFIER</th><th>SUPPRIMER</th></tr>";
	if ( query.pseudo === "root" && query.password === "toor" ){
		for( i = 0 ; i < listeMembres.length ; i++ ){
			ligne = "<tr><td>"+listeMembres[i].pseudo+"</td><td>"+listeMembres[i].password+"</td>";
			supprimer = "<td><form action='req_admin_supprimer' method='GET'><input type ='hidden' name='membre' value='"+listeMembres[i].pseudo+"'><button class='button6'>supprimer</button></form></td></tr>"
			
			liste[i] = ligne ;
			string = String(string)+String(liste[i])+String(supprimer);
		}
		

		page = fs.readFileSync('accueil_admin_MiniYouxi.html', 'UTF-8');
		marqueurs = {};
		marqueurs.pseudo = query.pseudo;
		marqueurs.membres = string+String("</table>");
		page = page.supplant(marqueurs);
	

	// ON RENVOIT UNE PAGE HTML 
	
	} else if(trouve === false) {
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



	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};

//---------------------------------------------------------------------------

module.exports = trait;
