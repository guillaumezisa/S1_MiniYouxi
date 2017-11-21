// Page d'accueil du PI Mini Youxi

"use strict";

var http = require("http");
var url = require("url");
var querystring = require("querystring");

//-------------------------------------------------------------------------
// DECLARATION DES DIFFERENTS MODULES CORRESPONDANT A CHAQUE ACTION
//-------------------------------------------------------------------------

var req_commencer = require("./req_commencer.js");
var req_afficher_formulaire_inscription = require("./req_afficher_formulaire_inscription.js");
var req_inscrire = require("./req_inscrire.js");
var req_identifier = require("./req_identifier.js");

var req_static = require("./req_static.js");
var req_erreur = require("./req_erreur.js");

var req_regle_morpion = require("./req_regle_morpion.js");
var req_quitter_regle_morpion = require("./req_quitter_regle_morpion.js");
var req_jouer_morpion = require("./req_jouer_morpion.js");
var req_abandonner_morpion = require("./req_abandonner_morpion.js");
var req_joueur_pose_pion_morpion = require("./req_joueur_pose_pion_morpion.js");
var req_quitter_morpion = require("./req_quitter_morpion.js");


//-------------------------------------------------------------------------
// FONCTION DE CALLBACK APPELLEE POUR CHAQUE REQUETE
//-------------------------------------------------------------------------

var traite_requete = function (req, res) {

	var ressource;
	var requete;
	var pathname;;
	var query;

	console.log("URL reçue : " + req.url);
	requete = url.parse(req.url, true);
	pathname = requete.pathname;
	query = requete.query;

	// ROUTEUR

	try {
		switch (pathname) {
			case '/':
			case '/req_commencer':
				req_commencer(req, res, query);
				break;
			case '/req_afficher_formulaire_inscription':
				req_afficher_formulaire_inscription(req, res, query);
				break;
			case '/req_inscrire':
				req_inscrire(req, res, query);
				break;
			case '/req_identifier':
				req_identifier(req, res, query);
				break;
			case "/req_regle_morpion":
			    req_regle_morpion(req, res, query);
				break;
			case "/req_quitter_regle_morpion":
			    req_quitter_regle_morpion(req, res, query);
				break;
			case "/req_jouer_morpion":
			    req_jouer_morpion(req, res, query);
				break;
			case "/req_abandonner_morpion":
			    req_abandonner_morpion(req, res, query);
				break;
			case "/req_joueur_pose_pion_morpion":
			    req_joueur_pose_pion_morpion(req, res, query);
				break;
			case "/req_quitter_morpion":
			    req_quitter_morpion(req, res, query);
				break;
			default:
				req_static(req, res, query);
				break;
		}
	} catch (e) {
		console.log('Erreur : ' + e.stack);
		console.log('Erreur : ' + e.message);
		//console.trace();
		req_erreur(req, res, query);
	}
};

//-------------------------------------------------------------------------
// CREATION ET LANCEMENT DU SERVEUR
//-------------------------------------------------------------------------

var mon_serveur = http.createServer(traite_requete);
var port = 5000;
console.log("Serveur en ecoute sur port " + port);
mon_serveur.listen(port);
