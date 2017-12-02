// traitement de /req_solitaire_afficher

"use strict";

var fs = require("fs");
require("remedial")
var page;
var trait = function (req, res, query) {
	page = fs.readFileSync("solitaire_jouer.html", "UTF-8");
	var marqueur = [];
	marqueur.pseudo = query.pseudo;
	marqueur = fs.readFileSync("./solitaire_"+query.pseudo+".json","UTF-8");
	marqueur = JSON.parse(marqueur);
	
	//Marqueur image
	//--Ligne 1--//
	if("place02" in query){
		marqueur.case02 = 'solitaire_p2.png';
	}
	if("place03" in query){
		marqueur.case03 = 'solitaire_p2.png';
	}
	if("place04" in query){
		marqueur.case04 = 'solitaire_p2.png';
	}
	//--Ligne 2--//
	if("place12" in query){
		marqueur.case12 = 'solitaire_p2.png';
	}
	if("place13" in query){
		marqueur.case13 = 'solitaire_p2.png';
	}
	if("place14" in query){
		marqueur.case14 = 'solitaire_p2.png';
	}
	//--Ligne 3--//
	if("place20" in query){
		marqueur.case22 = 'solitaire_p2.png';
	}
	if("place21" in query){
		marqueur.case23 = 'solitaire_p2.png';
	}
	if("place22" in query){
		marqueur.case24 = 'solitaire_p2.png';
	}
	if("place23" in query){
		marqueur.case23 = 'solitaire_p2.png';
	}
	if("place24" in query){
		marqueur.case24 = 'solitaire_p2.png';
	}
	if("place25" in query){
		marqueur.case25 = 'solitaire_p2.png';
	}
	if("place26" in query){
		marqueur.case26 = 'solitaire_p2.png';
	}
	//--Ligne 4--//
	if("place30" in query){
		marqueur.case30 = 'solitaire_p2.png';
	}
	if("place31" in query){
		marqueur.case31 = 'solitaire_p2.png';
	}
	if("place32" in query){
		marqueur.case32 = 'solitaire_p2.png';
	}
	if("place33" in query){
		marqueur.case33 = 'solitaire_p2.png';
	}
	if("place34" in query){
		marqueur.case34 = 'solitaire_p2.png';
	}
	if("place35" in query){
		marqueur.case35 = 'solitaire_p2.png';
	}
	if("place36" in query){
		marqueur.case36 = 'solitaire_p2.png';
	}
	//--Ligne 5--// 
	if("place40" in query){
		marqueur.case40 = 'solitaire_p2.png';
	}
	if("place41" in query){
		marqueur.case41 = 'solitaire_p2.png';
	}
	if("place42" in query){
		marqueur.case42 = 'solitaire_p2.png';
	}
	if("place43" in query){
		marqueur.case43 = 'solitaire_p2.png';
	}
	if("place44" in query){
		marqueur.case44 = 'solitaire_p2.png';
	}
	if("place45" in query){
		marqueur.case45 = 'solitaire_p2.png';
	}
	if("place46" in query){
		marqueur.case46 = 'solitaire_p2.png';
	}
	//--Ligne 6--//
	if("place52" in query){
		marqueur.case52 = 'solitaire_p2.png';
	}
	if("place53" in query){
		marqueur.case53 = 'solitaire_p2.png';
	}
	if("place54" in query){
		marqueur.case54 = 'solitaire_p2.png';
	}
	//--Ligne 7--//
	if("place62" in query){
		marqueur.case62 = 'solitaire_p2.png';
	}
	if("place63" in query){
		marqueur.case63 = 'solitaire_p2.png';
	}
	if("place64" in query){
		marqueur.case64 = 'solitaire_p2.png';
	}
	marqueur = JSON.stringify(marqueur);
	marqueur = fs.writeFileSync("solitaire_"+query.pseudo+".json",marqueur,"utf-8")
	page = page.supplant(marqueur)

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
