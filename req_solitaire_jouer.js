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
		if(marqueur.case02 = "solitaire_p1.png"){
			marqueur.case02 = "solitaire_p2.png";
		}else if(marqueur.case02 === "solitaire_l.png"){
			marqueur.case02 = "solitaire_l.png";
		}
	}
	if("place03" in query){
		if(marqueur.case03 = "solitaire_p1.png"){
			marqueur.case03 = "solitaire_p2.png";
		}else if(marqueur.case03 === "solitaire_l.png"){
			marqueur.case03 = "solitaire_l.png";
		}
	}
	if("place04" in query){
		if(marqueur.case04 = "solitaire_p1.png"){
			marqueur.case04 = "solitaire_p2.png";
		}else if(marqueur.case04 === "solitaire_l.png"){
			marqueur.case04 = "solitaire_l.png";
		}
	}
	//--Ligne 2--//
	if("place12" in query){
		if(marqueur.case12 = "solitaire_p1.png"){
			marqueur.case12 = "solitaire_p2.png";
		}else if(marqueur.case12 === "solitaire_l.png"){
			marqueur.case12 = "solitaire_l.png";
		}
	}
	if("place13" in query){
		if(marqueur.case13 = "solitaire_p1.png"){
			marqueur.case13 = "solitaire_p2.png";
		}else if(marqueur.case13 === "solitaire_l.png"){
			marqueur.case13 = "solitaire_l.png";
		}
	}
	if("place14" in query){
		if(marqueur.case14 = "solitaire_p1.png"){
			marqueur.case14 = "solitaire_p2.png";
		}else if(marqueur.case14 === "solitaire_l.png"){
			marqueur.case14 = "solitaire_l.png";
		}
	}
	//--Ligne 3--//
	if("place20" in query){
		if(marqueur.case20 = "solitaire_p1.png"){
			marqueur.case20 = "solitaire_p2.png";
		}else if(marqueur.case20 === "solitaire_l.png"){
			marqueur.case20 = "solitaire_l.png";
		}
	}
	if("place21" in query){
		if(marqueur.case21 = "solitaire_p1.png"){
			marqueur.case21 = "solitaire_p2.png";
		}else if(marqueur.case21 === "solitaire_l.png"){
			marqueur.case21 = "solitaire_l.png";
		}
	}
	if("place22" in query){
		if(marqueur.case22 = "solitaire_p1.png"){
			marqueur.case22 = "solitaire_p2.png";
		}else if(marqueur.case22 === "solitaire_l.png"){
			marqueur.case22 = "solitaire_l.png";
		}
	}
	if("place23" in query){
		if(marqueur.case23 = "solitaire_p1.png"){
			marqueur.case23 = "solitaire_p2.png";
		}else if(marqueur.case23 === "solitaire_l.png"){
			marqueur.case23 = "solitaire_l.png";
		}
	}
	if("place24" in query){
		if(marqueur.case24 = "solitaire_p1.png"){
			marqueur.case24 = "solitaire_p2.png";
		}else if(marqueur.case24 === "solitaire_l.png"){
			marqueur.case24 = "solitaire_l.png";
		}
	}
	if("place25" in query){
		if(marqueur.case25 = "solitaire_p1.png"){
			marqueur.case25 = "solitaire_p2.png";
		}else if(marqueur.case25 === "solitaire_l.png"){
			marqueur.case25 = "solitaire_l.png";
		}
	}
	if("place26" in query){
		if(marqueur.case26 = "solitaire_p1.png"){
			marqueur.case26 = "solitaire_p2.png";
		}else if(marqueur.case26 === "solitaire_l.png"){
			marqueur.case26 = "solitaire_l.png";
		}
	}
	//--Ligne 4--//
	if("place30" in query){
		if(marqueur.case30 = "solitaire_p1.png"){
			marqueur.case30 = "solitaire_p2.png";
		}else if(marqueur.case30 === "solitaire_l.png"){
			marqueur.case30 = "solitaire_l.png";
		}
	}
	if("place31" in query){
		if(marqueur.case31 = "solitaire_p1.png"){
			marqueur.case31 = "solitaire_p2.png";
		}else if(marqueur.case31 === "solitaire_l.png"){
			marqueur.case31 = "solitaire_l.png";
		}
	}
	if("place32" in query){
		if(marqueur.case32 = "solitaire_p1.png"){
			marqueur.case32 = "solitaire_p2.png";
		}else if(marqueur.case32 === "solitaire_l.png"){
			marqueur.case32 = "solitaire_l.png";
		}
	}
	if("place33" in query){
		if(marqueur.case33 = "solitaire_p1.png"){
			marqueur.case33 = "solitaire_p2.png";
		}else if(marqueur.case33 === "solitaire_l.png"){
			marqueur.case33 = "solitaire_l.png";
		}
	}
	if("place34" in query){
		if(marqueur.case34 = "solitaire_p1.png"){
			marqueur.case34 = "solitaire_p2.png";
		}else if(marqueur.case34 === "solitaire_l.png"){
			marqueur.case34 = "solitaire_l.png";
		}
	}
	if("place35" in query){
		if(marqueur.case35 = "solitaire_p1.png"){
			marqueur.case35 = "solitaire_p2.png";
		}else if(marqueur.case35 === "solitaire_l.png"){
			marqueur.case35 = "solitaire_l.png";
		}
	}
	if("place36" in query){
		if(marqueur.case36 = "solitaire_p1.png"){
			marqueur.case36 = "solitaire_p2.png";
		}else if(marqueur.case36 === "solitaire_l.png"){
			marqueur.case36 = "solitaire_l.png";
		}
	}
	//--Ligne 5--// 
	if("place40" in query){
		if(marqueur.case40 = "solitaire_p1.png"){
			marqueur.case40 = "solitaire_p2.png";
		}else if(marqueur.case40 === "solitaire_l.png"){
			marqueur.case40 = "solitaire_l.png";
		}
	}
	if("place41" in query){
		if(marqueur.case41 = "solitaire_p1.png"){
			marqueur.case41 = "solitaire_p2.png";
		}else if(marqueur.case41 === "solitaire_l.png"){
			marqueur.case41 = "solitaire_l.png";
		}
	}
	if("place42" in query){
		if(marqueur.case42 = "solitaire_p1.png"){
			marqueur.case42 = "solitaire_p2.png";
		}else if(marqueur.case42 === "solitaire_l.png"){
			marqueur.case42 = "solitaire_l.png";
		}
	}
	if("place43" in query){
		if(marqueur.case43 = "solitaire_p1.png"){
			marqueur.case43 = "solitaire_p2.png";
		}else if(marqueur.case43 === "solitaire_l.png"){
			marqueur.case43 = "solitaire_l.png";
		}
	}
	if("place44" in query){
		if(marqueur.case44 = "solitaire_p1.png"){
			marqueur.case44 = "solitaire_p2.png";
		}else if(marqueur.case44 === "solitaire_l.png"){
			marqueur.case44 = "solitaire_l.png";
		}
	}
	if("place45" in query){
		if(marqueur.case45 = "solitaire_p1.png"){
			marqueur.case45 = "solitaire_p2.png";
		}else if(marqueur.case45 === "solitaire_l.png"){
			marqueur.case45 = "solitaire_l.png";
		}
	}
	if("place46" in query){
		if(marqueur.case46 = "solitaire_p1.png"){
			marqueur.case46 = "solitaire_p2.png";
		}else if(marqueur.case46 === "solitaire_l.png"){
			marqueur.case46 = "solitaire_l.png";
		}
	}
	//--Ligne 6--//
	if("place52" in query){
		if(marqueur.case52 = "solitaire_p1.png"){
			marqueur.case52 = "solitaire_p2.png";
		}else if(marqueur.case52 === "solitaire_l.png"){
			marqueur.case52 = "solitaire_l.png";
		}
	}
	if("place53" in query){
		if(marqueur.case53 = "solitaire_p1.png"){
			marqueur.case53 = "solitaire_p2.png";
		}else if(marqueur.case53 === "solitaire_l.png"){
			marqueur.case53 = "solitaire_l.png";
		}
	}
	if("place54" in query){
		if(marqueur.case54 = "solitaire_p1.png"){
			marqueur.case54 = "solitaire_p2.png";
		}else if(marqueur.case54 === "solitaire_l.png"){
			marqueur.case54 = "solitaire_l.png";
		}
	}
	//--Ligne 7--//
	if("place62" in query){
		if(marqueur.case62 = "solitaire_p1.png"){
			marqueur.case62 = "solitaire_p2.png";
		}else if(marqueur.case62 === "solitaire_l.png"){
			marqueur.case62 = "solitaire_l.png";
		}
	}
	if("place63" in query){
		if(marqueur.case63 = "solitaire_p1.png"){
			marqueur.case63 = "solitaire_p2.png";
		}else if(marqueur.case63 === "solitaire_l.png"){
			marqueur.case63 = "solitaire_l.png";
		}
	}
	if("place64" in query){
		if(marqueur.case64 = "solitaire_p1.png"){
			marqueur.case64 = "solitaire_p2.png";
		}else if(marqueur.case64 === "solitaire_l.png"){
			marqueur.case64 = "solitaire_l.png";
		}
	}
	
	page = page.supplant(marqueur)
	
	marqueur = JSON.stringify(marqueur);
	marqueur = fs.writeFileSync("solitaire_"+query.pseudo+".json",marqueur,"utf-8")

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
