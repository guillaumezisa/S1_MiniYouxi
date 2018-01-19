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
	var fichier;


	
	fichier = fs.readFileSync("jouer_mental_"+ query.pseudo +".json","UTF-8") 
	console.log(fichier)
	reponse = JSON.parse(fichier) 
	console.log(reponse)
	
	
		marqueur = {}
	if (fichier === query.userInput){
		marqueur.ziza = "Bien jouer"
		}
	else {marqueur.ziza = "ah tu as rater" 
		}
	marqueur.reponse_utilisateur = query.userInput
		marqueur.reponse = reponse
		marqueur.pseudo = query.pseudo
		page = fs.readFileSync("mental_jason.html", "utf-8");
	page = page.supplant (marqueur) ; 

	response.writeHead(200,{"Content-Type" : " text/html "});
	response.write(page);
	response.end();


};

module.exports = trait;
