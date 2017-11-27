// traitement de /req_commencer_bataille

"use strict";

var fs = require("fs");
require("remedial");
var page;
var paquet;
var marqueur = {};
var mains

var melange = function(liste) {
    // fonction qui échange l'emplacement de deux elements d'une liste
    var nb1 = Math.floor(Math.random() * liste.length);
    var nb2 = Math.floor(Math.random() * liste.length);
	var place_libre;

	place_libre = liste[nb1];
	liste[nb1] = liste[nb2];
	liste[nb2] = place_libre;
}

var trait = function (req, res, query) {

    paquet = fs.readFileSync("paquet_cartes_origine.json", "UTF-8");
	paquet = JSON.parse(paquet);

	// On va mélanger le paquet
	for (var idx = 10000; idx > 0; idx -= 1) {
	    melange(paquet);
	}

	// On va distribuer les cartes
	mains = fs.readFileSync("mains_bataille.json", "UTF-8");
	mains = JSON.parse(mains)
    mains["joueur"] = [];
	mains["ordi"] = [];
	for (var idx = 0; idx < paquet.length; idx += 1) {
	    if (idx % 2 === 0) {
		    mains.joueur.push(paquet[idx]);
		} else if (idx % 2 === 1) {
		    mains.ordi.push(paquet[idx]);
		}
	}

	// On sauvegarde les mains des joueurs dans un JSON a son nom
	mains = JSON.stringify(mains);
	fs.writeFileSync("mains_bataille_" + query.pseudo + ".json", mains, "UTF-8");

    // On va afficher la page de jeu
	page = fs.readFileSync("table_bataille.html", "UTF-8");

    marqueur.pseudo = query.pseudo

    page = page.supplant(marqueur)
    
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write(page)
	res.end()

};

module.exports = trait
