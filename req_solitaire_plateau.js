// traitement de /req_solitaire_plateau

"use strict";

var fs = require("fs");
require("remedial")
var page;
var trait = function (req, res, query) {
	page = fs.readFileSync("solitaire_plateau.html", "UTF-8");
	
	var marqueur = {};
	
	marqueur.case02 = 'solitaire_p1.png';
	marqueur.case03 = 'solitaire_p1.png';
	marqueur.case04 = 'solitaire_p1.png';
	
	marqueur.case12 = 'solitaire_p1.png';
	marqueur.case13 = 'solitaire_p1.png';
	marqueur.case14 = 'solitaire_p1.png';
	
	marqueur.case20 = 'solitaire_p1.png';
	marqueur.case21 = 'solitaire_p1.png';
	marqueur.case22 = 'solitaire_p1.png';
	marqueur.case23 = 'solitaire_p1.png';
	marqueur.case24 = 'solitaire_p1.png';
	marqueur.case25 = 'solitaire_p1.png';
	marqueur.case26 = 'solitaire_p1.png';
	
	marqueur.case30 = 'solitaire_p1.png';
	marqueur.case31 = 'solitaire_p1.png';
	marqueur.case32 = 'solitaire_p1.png';
	marqueur.case33 = 'solitaire_l.png';
	marqueur.case34 = 'solitaire_p1.png';
	marqueur.case35 = 'solitaire_p1.png';
	marqueur.case36 = 'solitaire_p1.png';
	
	marqueur.case40 = 'solitaire_p1.png';
	marqueur.case41 = 'solitaire_p1.png';
	marqueur.case42 = 'solitaire_p1.png';
	marqueur.case43 = 'solitaire_p1.png';
	marqueur.case44 = 'solitaire_p1.png';
	marqueur.case45 = 'solitaire_p1.png';
	marqueur.case46 = 'solitaire_p1.png';

	marqueur.case52 = 'solitaire_p1.png';
	marqueur.case53 = 'solitaire_p1.png';
	marqueur.case54 = 'solitaire_p1.png';
	
	marqueur.case62 = 'solitaire_p1.png';
	marqueur.case63 = 'solitaire_p1.png';
	marqueur.case64 = 'solitaire_p1.png';
	
	var here = JSON.stringify(marqueur);
	var now = fs.writeFileSync("solitaire_"+query.pseudo+".json", here , "UTF-8");
	fs.writeFileSync("solitaire_"+query.pseudo+".json", here , "UTF-8");
	
	var nbp = {};
	nbp.score = 33 ;

	here = JSON.stringify(nbp);
	fs.writeFileSync("solitaire_nbp_"+query.pseudo+".json",here,"utf-8");

	marqueur.pseudo = query.pseudo;
	page = page.supplant(marqueur)

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
