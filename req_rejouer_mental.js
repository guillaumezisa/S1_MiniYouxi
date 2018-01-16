"use strict"


	var fs = require ("fs");
	require ("remedial");
	var page;
	var marqueur = {} ;
	var trait = function (req, res, query) {
	var comparaison;
	var nb_A;
	var nb_B;
	var reponse;
	var resultat;
	var no;
	var operateur 

	nb_A = Math.floor(Math.random()*10)+1
	nb_B = Math.floor(Math.random()*10)+1

	marqueur.nb_A = nb_A;
	marqueur.nb_B = nb_B;

	no = Math.floor(Math.random()*5);
	switch (no) {
		case 0:
			operateur = "+";
			resultat = nb_A + nb_B;
			break;
		case 1 : 
			operateur = "*";
			resultat = nb_A * nb_B;
			break;
		case 2 : 
			operateur = "-";
			resultat = nb_A - nb_B;
			break;
		case 3 : 
			operateur="/";
			resultat = nb_A / nb_B;
			break;
	}
	marqueur.operateur = operateur;
	
	var mental_jouer = JSON.stringify(resultat);
	fs.writeFileSync("jouer_mental_"+ query.pseudo + ".json",resultat, "utf-8");

	page = fs.readFileSync("mental.html", "UTF-8");
	marqueur.pseudo = query.pseudo
	page = page.supplant(marqueur)
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.write(page);
	res.end();


}

module.exports = trait;                         
