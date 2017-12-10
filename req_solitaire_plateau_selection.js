// traitement de /req_solitaire_plateau_selection

"use strict";

var fs = require("fs");
require("remedial")
var page;
var trait = function (req, res, query) {
	page = fs.readFileSync("solitaire_plateau_selection.html", "UTF-8");
	var marqueur = [];
	var nbp;// Nombre de pion
	var ver;// Vertical
	var hor;// Horizontale
	var coo;// Coordonée
	var pion = false ;
	var imgp;//Image passive
	imgp = "solitaire_p1.png";
	var imga;//Image active
	imga = "solitaire_p2.png";
	var imgl;//Image libre
	imgl = "solitaire_l.png";
	var ca = []; // Case active
	console.log("Le joueur "+query.pseudo+" joue au Solitaire");
	marqueur = fs.readFileSync("./solitaire_partie_"+query.pseudo+".json","UTF-8");
	marqueur = JSON.parse(marqueur);
	marqueur.pseudo = query.pseudo;
	console.log("Le nombre de pion restant au Solitaire de "+query.pseudo+" est "+marqueur.pion);
	
	//Si nombre de pion = 1 afficher page de fin .
	if (marqueur.pion === 1){
		fs.readFileSync("solitaire_fin.html","UTF-8");
	}
	
	coo = query.place;
	
	for ( ver = 0 ; ver < 7 ; ver++){
		for ( hor = 0 ; hor < 7 ; hor++){
			if(marqueur["case"+String(ver)+String(hor)] === imga){	
				pion = true;
			}
		}
	}
	if (pion === true){
		if ( marqueur["case"+coo] === imga){
			marqueur["case"+coo] = imgp;
		}
	}else if ( marqueur["case"+coo] === imgl){
		fs.readFileSync(solitaire_jouer.html,"UTF-8");
	}else if (marqueur["case"+coo] === imgp){
		marqueur["case"+coo] = imga;
		ca = coo ;
	}
	marqueur.actif = ca;
	
	page = page.supplant(marqueur)
	marqueur = JSON.stringify(marqueur);
	fs.writeFileSync("solitaire_partie_"+query.pseudo+".json",marqueur,"utf-8")
	
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
