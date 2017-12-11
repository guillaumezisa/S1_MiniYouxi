// traitement de /req_solitaire_plateau

"use strict";

var fs = require("fs");
require("remedial")
var page;
var trait = function (req, res, query) {
	page = fs.readFileSync("solitaire_plateau.html", "UTF-8");
	var marqueur = {};
	//COORDONNE
	marqueur.case02 = 1;
	marqueur.case03 = 1;
	marqueur.case04 = 1;
	
	marqueur.case12 = 1;
	marqueur.case13 = 1;
	marqueur.case14 = 1;
	
	marqueur.case20 = 1;
	marqueur.case21 = 1;
	marqueur.case22 = 1;
	marqueur.case23 = 1;
	marqueur.case24 = 1;
	marqueur.case25 = 1;
	marqueur.case26 = 1;
	
	marqueur.case30 = 1;
	marqueur.case31 = 1;
	marqueur.case32 = 1;
	marqueur.case33 = 0;
	marqueur.case34 = 1;
	marqueur.case35 = 1;
	marqueur.case36 = 1;
	
	marqueur.case40 = 1;
	marqueur.case41 = 1;
	marqueur.case42 = 1;
	marqueur.case43 = 1;
	marqueur.case44 = 1;
	marqueur.case45 = 1;
	marqueur.case46 = 1;

	marqueur.case52 = 1;
	marqueur.case53 = 1;
	marqueur.case54 = 1;
	
	marqueur.case62 = 1;
	marqueur.case63 = 1;
	marqueur.case64 = 1;
	//IMAGE
	marqueur.img02 = "solitaire_p1.png";
	marqueur.img03 = "solitaire_p1.png";
	marqueur.img04 = "solitaire_p1.png";
	
	marqueur.img12 = "solitaire_p1.png";
	marqueur.img13 = "solitaire_p1.png";
	marqueur.img14 = "solitaire_p1.png";
	
	marqueur.img20 = "solitaire_p1.png";
	marqueur.img21 = "solitaire_p1.png";
	marqueur.img22 = "solitaire_p1.png";
	marqueur.img23 = "solitaire_p1.png";
	marqueur.img24 = "solitaire_p1.png";
	marqueur.img25 = "solitaire_p1.png";
	marqueur.img26 = "solitaire_p1.png";
	
	marqueur.img30 = "solitaire_p1.png";
	marqueur.img31 = "solitaire_p1.png";
	marqueur.img32 = "solitaire_p1.png";
	marqueur.img33 = "solitaire_l.png";
	marqueur.img34 = "solitaire_p1.png";
	marqueur.img35 = "solitaire_p1.png";
	marqueur.img36 = "solitaire_p1.png";
	
	marqueur.img40 = "solitaire_p1.png";
	marqueur.img41 = "solitaire_p1.png";
	marqueur.img42 = "solitaire_p1.png";
	marqueur.img43 = "solitaire_p1.png";
	marqueur.img44 = "solitaire_p1.png";
	marqueur.img45 = "solitaire_p1.png";
	marqueur.img46 = "solitaire_p1.png";

	marqueur.img52 = "solitaire_p1.png";
	marqueur.img53 = "solitaire_p1.png";
	marqueur.img54 = "solitaire_p1.png";
	
	marqueur.img62 = "solitaire_p1.png";
	marqueur.img63 = "solitaire_p1.png";
	marqueur.img64 = "solitaire_p1.png";
	
	marqueur.pion = 32;
	marqueur.actif = "" ;
	marqueur.pseudo = query.pseudo;
	
	var here = JSON.stringify(marqueur);
	var now = fs.writeFileSync("solitaire_partie_"+query.pseudo+".json", here , "UTF-8");
	fs.writeFileSync("solitaire_"+query.pseudo+".json", here , "UTF-8");

	marqueur.pseudo = query.pseudo;
	page = page.supplant(marqueur)

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
