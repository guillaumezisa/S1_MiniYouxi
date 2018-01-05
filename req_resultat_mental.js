// resultat mental 
"use strict" 

var fs = require ("fs")
require ('remedial') ; 


var trait = function (request, response, query){

	var page ;
	var marqueur;
	var comparaison ;
	var jason;
	var reponse;



	if (query.userInput == reponse) {
		page = "vrai"; 
	} else {
		page = "faux";
	}

	reponse  = fs.readFileSync("parsedData.json" ,"UTF-8");

	marqueur = {}
	marqueur.reponse = reponse

		marqueur.pseudo = query.pseudo
		page = fs.readFileSync("mental_jason.html", "utf-8");
	page = page.supplant (marqueur) ; 

	response.writeHead(200,{"Content-Type" : " text/html "});
	response.write(page);
	response.end();


};

module.exports = trait;
