// traitement de /req_afficher_page_admin

"use strict";

var fs = require("fs");
require("remedial");

var trait = function (req, res, query) {
	var liste = [];
	var string = "<table><tr><th>PSEUDO</th><th>PASSWORD</th><th>SUPPRIMER</th></tr>";

	var membres = fs.readFileSync("membres.json", "UTF-8");
	membres = JSON.parse(membres);
	var nb_membres = membres.length;

	for (var i = 0; i < nb_membres; i += 1) {
		var ligne = "<tr><td>" + membres[i].pseudo + "</td><td>" + membres[i].password + "</td>";
		var supprimer = "<td><form action='req_admin_supprimer' method='GET'><input type ='hidden' name='membre' value='" + membres[i].pseudo + "'><button class='button6'>supprimer</button></form></td></tr>";

		liste.push(ligne);

		string = string + liste[i] + supprimer;

		var page = fs.readFileSync('accueil_admin_MiniYouxi.html', 'UTF-8');
		var marqueurs = {};
		marqueurs.pseudo = query.pseudo;
		marqueurs.membres = string+String("</table>");
		page = page.supplant(marqueurs);

	}
    return page;

}

	module.exports = trait;
