// Requete quitter pour le pfc 


"use strict" 

remedial= ("remedial");
var fs = require("fs");
var page;
var marqueur;

var trait = function ( req , res , query) {
	page = fs.readFileSync("accueil_membre_MiniYouxi.html","utf-8");

	marqueur = {};
	marqueur.pseudo = query.pseudo;
	page = page.supplant(marqueur);

	
	res.writeHead(200,{"Content-Type": "text/html"});
	res.write(page);
	res.end();
};

