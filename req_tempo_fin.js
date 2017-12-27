// traitement de /req_tempo_fin

"use strict";

var fs = require("fs");
require("remedial")
var page;
var marqueur;
var trait = function (req, res, query) {
var fichier ;
var membre ;	
var i ;
	// CHARGEMENT DU JSON 
	var extract = fs.readFileSync("tempo_partie_"+query.pseudo+".json","UTF-8");
	var load = JSON.parse(extract);
	
	// COMPARAISON ENTRE LE TEMPS DU JSON ET LE NOUVEAU TEMP
	var x = load[0].nbgagnant;
	var nb = Math.floor(Date.now()/1000);
	
	// CONDITIONS DE VICTOIRE ET CREATION DES MARQUEURS
	marqueur = {}
	marqueur.pseudo = query.pseudo
	marqueur.nb = nb;
	marqueur.x = x;
	
	if ( x === nb ) {
		marqueur.fin = "<center>Vous avez gagner !<br><br><img src='tempo_win.png'width='250'></center>";
		marqueur.com ="";
		
		// ASSIGNEMENT DE POINT
		fichier = fs.readFileSync("membres.json",'UTF-8');
		membre = JSON.parse(fichier);

		for ( i = 0 ; i < membre.length ; i++){
			if ( membre[i].pseudo === query.pseudo){
				membre[i].score = Number(membre[i].score)+10;
			}
		}
		membre = JSON.stringify( membre );
		fichier = fs.writeFileSync("membres.json",membre ,'UTF-8');
		
		
		// SUPPRESSION DU JSON DE PARTIE
		fs.unlinkSync("tempo_partie_"+query.pseudo+".json");
	}else{
		if ( x < nb ){
			var calc = nb-x ;
			marqueur.com = "<center>Vous avez attendu "+calc+" secondes de trop !</center>";	
			marqueur.fin = "<center>Vous avez perdu !<br><br><img src='tempo_loose.jpg'width='350'></center>";
		fs.unlinkSync("tempo_partie_"+query.pseudo+".json");
		}else if ( x > nb){
			var calc = x-nb ;
			marqueur.com = "<center>Vous avez été trop rapide de "+calc+" secondes </center>";
			marqueur.fin = "<center>Vous avez perdu !<br><br><img src='tempo_loose.jpg'width='350'></center>";
		fs.unlinkSync("tempo_partie_"+query.pseudo+".json");
		}
	}
	
	// ENVOIE DE LA PAGE 

	page = fs.readFileSync("tempo_fin.html", "UTF-8");
	page = page.supplant(marqueur)

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
}

module.exports = trait;
