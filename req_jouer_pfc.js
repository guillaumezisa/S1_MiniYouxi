"use strict";

var fs= require("fs");
require("remedial") ;


var trait = function (request, response, query) {


	var page; 
	var marqueurs;



page = fs.readFileSync("pierre-feuille-ciseaux.html", "utf-8");
marqueurs = {};
marqueurs.pseudo = query.pseudo
page = page.supplant(marqueurs);


response.writeHead(200, {"Content-Type" : "text/html" });
response.write(page);
response.end();

};


module.exports = trait ;

