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
var req_easter_egg = require("./easter_egg.js");
var req_abandonner_morpion = require("./req_abandonner_morpion.js");
var req_joueur_pose_pion_morpion = require("./req_joueur_pose_pion_morpion.js");
var req_quitter_morpion = require("./req_quitter_morpion.js");
var req_regle_bataille = require("./req_regle_bataille.js");
var req_quitter_regle_bataille = require("./req_quitter_regle_bataille.js");
var req_commencer_bataille = require("./req_commencer_bataille.js");
var req_pose_carte_bataille = require("./req_pose_carte_bataille.js");
var req_abandonner_bataille = require("./req_abandonner_bataille.js");
var req_resultat_bataille = require("./req_resultat_bataille.js");
var req_quitter_bataille = require("./req_quitter_bataille.js");

var req_regle_pfc = require("./req_regle_pfc.js");
var req_lancer_pfc = require("./req_lancer_pfc.js");


var req_pendu = require("./req_pendu.js");

var req_tempo_regle = require("./req_tempo_regle.js");
var req_tempo_afficher = require("./req_tempo_afficher.js");
var req_tempo_jouer = require("./req_tempo_jouer.js");
var req_tempo_fin = require("./req_tempo_fin.js");
var req_tempo_rejouer = require("./req_tempo_rejouer.js");
var req_tempo_quitter = require("./req_tempo_quitter.js");

var req_solitaire_regle = require("./req_solitaire_regle.js");
var req_solitaire_afficher = require("./req_solitaire_afficher.js");
var req_solitaire_quitter = require("./req_solitaire_quitter.js");
var req_solitaire_jouer = require("./req_solitaire_jouer.js");
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
			// morpion
			case "/req_regle_morpion":
			    req_regle_morpion(req, res, query);
				break;
			case "/req_quitter_regle_morpion":
			    req_quitter_regle_morpion(req, res, query);
				break;
			case "/req_jouer_morpion":
			    req_jouer_morpion(req, res, query);
				break;
			case "/easter_egg":
			    req_easter_egg(req, res, query);
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
           // bataille
		   case "/req_regle_bataille":
		       req_regle_bataille(req, res, query);
			   break;
		   case "/req_quitter_regle_bataille":
		       req_quitter_regle_bataille(req, res, query);
			   break;
		   case "/req_commencer_bataille":
		       req_commencer_bataille(req, res, query);
			   break;
		   case "/req_pose_carte_bataille":
		       req_pose_carte_bataille(req, res, query);
			   break;
		   case "/req_abandonner_bataille":
		       req_abandonner_bataille(req, res, query);
			   break;
		   case "/req_resultat_bataille":
		       req_resultat_bataille(req, res, query);
			   break;
		   case "/req_quitter_bataille":
		       req_quitter_bataille(req, res, query);
			   break;
			//pfc
			case "/req_regle_pfc":
				req_regle_pfc(req, res, query);
				break;
			case "/req_lancer_pfc":
				req_lancer_pfc(req, res, query);
				break;

			case "/req_pendu":
				req_pendu(req, res, query);
				break;
			case "/req_jouer_pendu":
				req_pendu(req, res, query);
				break;
			//TEMPO
			case "/req_tempo_regle":
				req_tempo_regle( req,res,query);
				break;
			case "/req_tempo_afficher":
				req_tempo_afficher( req,res,query);
				break;
			case "/req_tempo_jouer":
				req_tempo_jouer( req,res,query);
				break;
			case "/req_tempo_fin":
				req_tempo_fin(req ,res,query);
				break;
			case "/req_tempo_rejouer":
				req_tempo_rejouer( req,res,query);
				break;
			case "/req_tempo_quitter":
				req_tempo_quitter( req,res,query);
				break;
			//Solitaire
			case "/req_solitaire_regle":
				req_solitaire_regle( req,res,query);
				break;
			case "/req_solitaire_afficher":
				req_solitaire_afficher(req,res,query);
				break;
			case "/req_solitaire_quitter":
				req_solitaire_quitter(req,res,query);
				break;
			case "/req_solitaire_jouer":
				req_solitaire_jouer(req,res,query);
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
