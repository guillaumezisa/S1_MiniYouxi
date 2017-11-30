// traitement de /req_solitaire_afficher

"use strict";

var fs = require("fs");
require("remedial")
var page;
var trait = function (req, res, query) {
	//hj = horsjeu
	//p = pion
	//t = livre
	var partie = { 
		"case00" : "solitaire_hj.png","val00":"hj",			
		"case01" : "solitaire_hj.png","val01":"hj",			
		"case02" : "solitaire_hj.png","val02":"p",			
		"case03" : "solitaire_hj.png","val03":"p",			
		"case04" : "solitaire_hj.png","val04":"p",			
		"case05" : "solitaire_hj.png","val05":"hj",			
		"case06" : "solitaire_hj.png","val06":"hj",			
		
		"case10" : "solitaire_hj.png","val10":"hj",			
		"case11" : "solitaire_hj.png","val11":"hj",			
		"case12" : "solitaire_hj.png","val12":"p",			
		"case13" : "solitaire_hj.png","val13":"p",			
		"case14" : "solitaire_hj.png","val14":"p",			
		"case15" : "solitaire_hj.png","val15":"hj",			
		"case16" : "solitaire_hj.png","val16":"hj",			
		
		"case20" : "solitaire_hj.png","val20":"p",			
		"case21" : "solitaire_hj.png","val21":"p",			
		"case22" : "solitaire_hj.png","val22":"p",			
		"case23" : "solitaire_hj.png","val23":"p",			
		"case24" : "solitaire_hj.png","val24":"p",			
		"case25" : "solitaire_hj.png","val25":"p",			
		"case26" : "solitaire_hj.png","val26":"p",			
		
		"case30" : "solitaire_hj.png","val30":"p",			
		"case31" : "solitaire_hj.png","val31":"p",			
		"case32" : "solitaire_hj.png","val32":"p",			
		"case33" : "solitaire_hj.png","val33":"t",			
		"case34" : "solitaire_hj.png","val34":"p",			
		"case35" : "solitaire_hj.png","val35":"p",			
		"case36" : "solitaire_hj.png","val36":"p",			
		
		"case40" : "solitaire_hj.png","val40":"p",			
		"case41" : "solitaire_hj.png","val41":"p",			
		"case42" : "solitaire_hj.png","val42":"p",			
		"case43" : "solitaire_hj.png","val43":"p",			
		"case44" : "solitaire_hj.png","val44":"p",			
		"case45" : "solitaire_hj.png","val45":"p",			
		"case46" : "solitaire_hj.png","val46":"p",			
	
		"case50" : "solitaire_hj.png","val50":"hj",			
		"case51" : "solitaire_hj.png","val51":"hj",			
		"case52" : "solitaire_hj.png","val52":"p",			
		"case53" : "solitaire_hj.png","val53":"p",			
		"case54" : "solitaire_hj.png","val54":"p",			
		"case55" : "solitaire_hj.png","val55":"hj",			
		"case56" : "solitaire_hj.png","val56":"hj",			
	
		"case60" : "solitaire_hj.png","val60":"hj",			
		"case61" : "solitaire_hj.png","val61":"hj",			
		"case62" : "solitaire_hj.png","val62":"p",			
		"case63" : "solitaire_hj.png","val63":"p",			
		"case64" : "solitaire_hj.png","val64":"p",			
		"case65" : "solitaire_hj.png","val65":"hj",			
		"case66" : "solitaire_hj.png","val66":"hj",			
	}
	partie = JSON.stringify(partie);
	fs.writeFileSync("solitaire_"+query.pseudo+".json",partie,"UTF-8");
	
	var now = fs.readFileSync("solitaire_"+query.pseudo+".json","UTF-8");
	var here = JSON.parse(now);

	page = fs.readFileSync("solitaire_afficher.html", "UTF-8");
	
	var marqueur = {};
	marqueur = fs.readFileSync("./solitaire_origine.json","UTF-8");
	marqueur = JSON.parse(marqueur);
	
	//Marqueur image
	marqueur.case00 = 'solitaire_hj.png';
	marqueur.case01 = 'solitaire_hj.png';
	marqueur.case02 = 'solitaire_p1.png';
	marqueur.case03 = 'solitaire_p1.png';
	marqueur.case04 = 'solitaire_p1.png';
	marqueur.case05 = 'solitaire_hj.png';
	marqueur.case06 = 'solitaire_hj.png';
	
	marqueur.case10 = 'solitaire_hj.png';
	marqueur.case11 = 'solitaire_hj.png';
	marqueur.case12 = 'solitaire_p1.png';
	marqueur.case13 = 'solitaire_p1.png';
	marqueur.case14 = 'solitaire_p1.png';
	marqueur.case15 = 'solitaire_hj.png';
	marqueur.case16 = 'solitaire_hj.png';
	
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

	marqueur.case50 = 'solitaire_hj.png';
	marqueur.case51 = 'solitaire_hj.png';
	marqueur.case52 = 'solitaire_p1.png';
	marqueur.case53 = 'solitaire_p1.png';
	marqueur.case54 = 'solitaire_p1.png';
	marqueur.case55 = 'solitaire_hj.png';
	marqueur.case56 = 'solitaire_hj.png';
	
	marqueur.case60 = 'solitaire_hj.png';
	marqueur.case61 = 'solitaire_hj.png';
	marqueur.case62 = 'solitaire_p1.png';
	marqueur.case63 = 'solitaire_p1.png';
	marqueur.case64 = 'solitaire_p1.png';
	marqueur.case65 = 'solitaire_hj.png';
	marqueur.case66 = 'solitaire_hj.png';

	marqueur.pseudo = query.pseudo;
	page = page.supplant(marqueur)

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
