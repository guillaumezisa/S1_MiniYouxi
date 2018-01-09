// analyser mental


"use strict";

	var fs = require ("fs");
	require ('remedial') ;
	var  trait = function (request, response, query) {
	var page;
	var comparaison;
	var nb_A;
	var nb_B;
	var reponse;
	var resultat;
	var no;
	var operateur;
	var reponse_utilisateur;
	var nb_joueur;
	nb_A = Math.floor(Math.random()*10)+1
	nb_B = Math.floor(Math.random()*10)+1
	
	no = Math.floor(Math.random()*5);
	switch (no) {
		case 0:
			operateur =  " + ";
			resultat = nb_A + nb_B;
			break;
		case 1 :
			operateur =  " \* ";
			resultat = nb_A * nb_B;
			break;
		case 2 :
			operateur =   " \- ";
			resultat = nb_A - nb_B;
			break;
		case 3 :
			operateur =" / ";
			resultat = nb_A / nb_B;
			break;
	}


	
	var marqueur = {} ;
	marqueur.nb_A = nb_A;
	marqueur.nb_B = nb_B;
	marqueur.operateur = operateur;
	marqueur.pseudo = query.pseudo
	
	var mental_jouer = JSON.stringify(resultat);
	fs.writeFileSync("jouer_mental_"+ query.pseudo +".json",resultat,"utf-8");
	page = fs.readFileSync("mental.html" , "UTF-8");
	page = page.supplant(marqueur);

	response.writeHead(200,{"Content-Type" : " text/html"});
	response.write(page);
	response.end();



}; 

module.exports = trait ; 
