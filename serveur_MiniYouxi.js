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
var req_contact = require("./req_contact.js");
var req_contact_quitter = require("./req_contact_quitter.js");

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
var req_regle_pcf_remake = require("./req_regle_pcf_remake.js");
var req_commencer_pcf_remake = require("./req_commencer_pcf_remake.js");
var req_quitter_pcf_remake = require("./req_quitter_pcf_remake.js");

var req_pendu = require("./req_pendu.js");

var req_tempo_regle = require("./req_tempo_regle.js");
var req_tempo_afficher = require("./req_tempo_afficher.js");
var req_tempo_jouer = require("./req_tempo_jouer.js");
var req_tempo_fin = require("./req_tempo_fin.js");
var req_tempo_rejouer = require("./req_tempo_rejouer.js");
var req_tempo_quitter = require("./req_tempo_quitter.js");
var req_tempo_abandonner = require("./req_tempo_abandonner.js");

var req_solitaire_regle = require("./req_solitaire_regle.js");
var req_solitaire_plateau = require("./req_solitaire_plateau.js");
var req_solitaire_quitter = require("./req_solitaire_quitter.js");
var req_solitaire_plateau_selection=require("./req_solitaire_plateau_selection.js")
var req_solitaire_plateau_mouvement=require("./req_solitaire_plateau_mouvement.js")
var req_solitaire_rejouer = require("./req_solitaire_rejouer.js");
var req_solitaire_retour = require ("./req_solitaire_retour.js");

var req_rejouer_pfc = require("./req_rejouer_pfc.js");
var req_regle_pfc = require("./req_regle_pfc.js");
var req_analyser_pfc = require("./req_analyser_pfc.js");
var req_jouer_pfc = require("./req_jouer_pfc.js");
var req_abandonner_pfc = require("./req_abandonner_pfc.js");

var req_regle_mental = require("./req_regle_mental.js");
var req_abandonner_mental = require("./req_abandonner_mental.js");
var req_jouer_mental = require("./req_jouer_mental.js");
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
			case '/req_contact_quitter':
				req_contact_quitter(req, res, query);
				break;
			case '/req_contact':
				req_contact(req, res, query);
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
			//mental
			case "/req_regle_mental":
				req_regle_mental(req, res, query);
				break;
			case "/req_abandonner_mental":
				req_abandonner_mental(req, res, query);
				break ;
			case "/req_jouer_mental":
				req_jouer_mental(req, res, query);
				break ;
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
			// PCF remake
			case "/req_regle_pcf_remake":
			    req_regle_pcf_remake(req, res, query);
				break;
			case "/req_commencer_pcf_remake":
			    req_commencer_pcf_remake(req, res, query);
				break;
			case "/req_quitter_pcf_remake":
			    req_quitter_pcf_remake(req, res, query);
				break;
			//pfc
			case "/req_analyser_pfc":
				req_analyser_pfc(req, res, query);
				break;
			case "/req_jouer_pfc":
				req_jouer_pfc(req, res, query);
				break;
			case "/req_abandonner_pfc":
				req_abandonner_pfc(req, res, query);
				break;
			case "/req_regle_pfc":
				req_regle_pfc(req, res, query);
				break;
			case "/req_rejouer_pfc":
				req_rejouer_pfc(res, res, query);
				break;
				// pendu
			case "/req_pendu":
				req_pendu(req, res, query);
				break;
			case "/req_jouer_pendu":
				req_pendu(req, res, query);
				break;
			case "/req_quitter_pendu":
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
			case "/req_tempo_abandonner":
				req_tempo_quitter( req,res,query);
				break;
			//Solitaire
			case "/req_solitaire_regle":
				req_solitaire_regle( req,res,query);
				break;
			case "/req_solitaire_plateau":
				req_solitaire_plateau(req,res,query);
				break;
			case "/req_solitaire_quitter":
				req_solitaire_quitter(req,res,query);
				break;
			case "/req_solitaire_plateau_selection":
				req_solitaire_plateau_selection(req,res,query);
				break;
			case "/req_solitaire_plateau_mouvement":
				req_solitaire_plateau_mouvement(req,res,query);
				break;
			case "/req_solitaire_rejouer":
				req_solitaire_rejouer(req,res,query);
				break;
			case "/req_solitaire_retour":
				req_solitaire_retour(req,res,query);
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
