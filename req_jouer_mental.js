// analyser mental


"use strict";

var fs = require ("fs");
require ('remedial') ;


var  trait = function (request, response, query) {

	var page;
	var marqueur = {} ;
	var comparaison;
	var nb_A;
	var nb_B;
	var reponse;
	var resultat;
	var no;
	var operateur;

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
			operateur ="/";
			resultat = nb_A / nb_B;
			break;
	}
	marqueur.operateur = operateur;
	
	var parsedData = JSON.parse(resultat);
	fs.writeFileSync("parsedData.json", parsedData);

	page = fs.readFileSync("mental.html" , "UTF-8");
	page = page.supplant(marqueur);

	response.writeHead(200,{"Content-Type" : " text/html"});
	response.write(page);
	response.end();



}; 

module.exports = trait ; 
