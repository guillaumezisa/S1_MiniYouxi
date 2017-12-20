// resultat mental 
"use strict" 

var fs = require ("fs")
require ('remedial') ; 


var trait = function (request, response, query){

	var page ;
	var marqueur = {};
	var comparaison ;
	var jason;
	var reponse;
	
	jason = fs.readFileSync("parsedData.json" ,"UTF-8");

	reponse = jason
	
	marqueur.reponse = reponse

	if (query.userInput == jason) {
		page = "vrai"; 
	} else {
		page = "faux";
	}
	
	page = page.supplant (marqueur) ; 

	response.writeHead(200,{"Content-Type" : " text/html "});
	response.write(page);
	response.end();


};

module.exports = trait;
