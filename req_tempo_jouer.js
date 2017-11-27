// traitement de /req_tempo_jouer
"use strict";

var fs = require("fs");
require("remedial")
var page;
var marqueur;
var partie;

var trait = function (req, res, query) {
	var x = Math.floor(Math.random()*10+3);
	var y = Math.floor(Date.now()/1000);
	var z =Number(x)+ Number(y);

	partie = [{ nbgagnant : z }];
	partie = JSON.stringify(partie);
	fs.writeFileSync("tempo_partie.json",partie,"utf-8");
	page = fs.readFileSync("tempo_jouer.html", "UTF-8");
	
	marqueur = {}
	marqueur.pseudo = query.pseudo;
	marqueur.x = x;
	marqueur.y = y;
	marqueur.z = z;
	page = page.supplant(marqueur)

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
