// traitement de /req_tempo_fin

"use strict";

var fs = require("fs");
require("remedial")
var page;
var marqueur;
var trait = function (req, res, query) {
	var extract = fs.readFileSync("tempo_partie.json","UTF-8");
	var load = JSON.parse(extract);
	console.log(load);
	var x = load[0].nbgagnant;
	var nb = Math.floor(Date.now()/1000);
	console.log(load[0].nbgagnant);
	console.log(x);
	page = fs.readFileSync("tempo_fin.html", "UTF-8");
	marqueur = {}
	marqueur.pseudo = query.pseudo
	if ( x === nb ) {
		marqueur.fin = " Vous avez gagner !";
	}else{
		if ( x < nb ){
			var calc = nb-x ;
			marqueur.com = " Vous avez attendu "+calc+" secondes de trop !";	
			marqueur.fin = " Vous avez perdu !";
		}else if ( x > nb){
			var calc = x-nb ;
			marqueur.com = " Vous avez été trop rapide de "+calc+" secondes";
			marqueur.fin = " Vous avez perdu !";
		}
	}
	marqueur.nb = nb;
	marqueur.x = x;
	page = page.supplant(marqueur)

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
