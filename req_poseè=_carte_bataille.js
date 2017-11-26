// traitemet de /req_pose_carte_bataille

"use strict";

var fs = require("fs");
require("remedial");
var mains;
var pose_joueur;
var pose_ordi;
var resultat;
var page;


var trait = function(req, res, query) {
    
	mains = fs.readFileSync("mains_bataille_toto.json", "UTF-8");
	mains = JSON.parse(mains);

	pose_joueur = mains.joueur[0];
	mains.joueurs.splice(0, 1);
	pose_ordi = mains.ordi[0];
	mains.ordi.splice(0, 1);

	if (pose_joueur[0] > pose_ordi[0]) {
	    resultat = "Le joueur l'emporte."
		mains.joueur.push(pose_joueuri, pose_ordi);
	} else {
	    resultat = "L'ordi l'emporte."
		mains.ordi.push(pose_joueur, pose_ordi);
	}
    
	mains = JSON.stringify(mains)
	fs.writeFileSync("mains_bataille_" + query.pseudo + ".json");
	
	if (mains.joueur.length === 0 || mains.ordi.length == 0) {
	} else {
	    page = fs.readFileSync("resultat_tour_bataille.html", "UTF-8")
