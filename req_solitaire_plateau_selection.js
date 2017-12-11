// traitement de /req_solitaire_plateau_selection

"use strict";

var fs = require("fs");
require("remedial")
var page;
var trait = function (req, res, query) {
	var marqueur = [];
	var ver;                     // Vertical
	var hor;                     // Horizontale
	var coo;                     // Coordonée
	var pion = false ;
	var ca = [];                 // Case active
	var fin = false;
	var compteur = 0 ;
	var compteurfin = 0;

	console.log("Le nombre de pion restant au Solitaire de "+query.pseudo+" est "+ marqueur.pion);
	
	marqueur = fs.readFileSync("./solitaire_partie_"+query.pseudo+".json","UTF-8");
	marqueur = JSON.parse(marqueur);
	page = fs.readFileSync("solitaire_plateau_selection.html", "UTF-8");
	
	
	
	//Si nombre de pion = 1 afficher page de fin .
	if (marqueur.pion === 1){
		fs.readFileSync("solitaire_fin.html","UTF-8");
		console.log("OMG OMG OMG OMG OMG C GG");
	}
	
	coo = query.place;
	
	for ( ver = 0 ; ver < 7 ; ver++){
		for ( hor = 0 ; hor < 7 ; hor++){
			if(marqueur["case"+String(ver)+String(hor)] === 1){
				compteur = 0;
				if(marqueur["case"+String(ver)+String(Number(hor)-1)] === 1){
					}else if(marqueur["case"+String(Number(ver)-1)+String(Number(hor)+1)] === 1){
						if(marqueur["case"+String(Number(ver)-2)+String(Number(hor)+2)] === 0){
							fin = false;
						}
					}else if(marqueur["case"+String(ver)+String(Number(hor)+1)]=== 1){
						if(marqueur["case"+String(ver)+String(Number(hor)+2)] === 0){
							fin = false
						}
					}else if(marqueur["case"+String(Number(ver)+1)+String(Number(hor)+1)]=== 1){
						if(marqueur["case"+String(Number(ver)+2)+String(Number(hor)+2)] === 0){
							fin = false;
						}
					}else if(marqueur["case"+String(Number(ver)+1)+String(hor)]=== 1){
						if(marqueur["case"+String(Number(ver)+2)+String(hor)] === 0){
							fin = false;
						}
					}else if(marqueur["case"+String(Number(ver)-1)+String(Number(hor)+1)]=== 1){	
						if(marqueur["case"+String(Number(ver)-2)+String(Number(hor)+2)] === 0){
							fin = false;
						}
					}else if(marqueur["case"+String(Number(ver)-1)+String(hor)]){
						if(marqueur["case"+String(Number(ver)-2)+String(hor)] === 0){
							fin = false;
						}
					}else if(marqueur["case"+String(Number(ver)-1)+String(Number(hor)-1)]){
						if(marqueur["case"+String(Number(ver)-2)+String(Number(hor)-2)] === 0){
							fin=false;
						}
					}else{
						fin = true;
					}
				}
			}		
		}
	if ( fin === true ){
		console.log("LE JOUEUR NE PEU PLUS RIEN JOUER FIN FIN FIN OMG OMG OMG GOMG OMGOMGOGMOGMOGMO");
		fs.readFileSync("solitaire_partie_"+query.pseudo+".json","utf-8");
	}
	if (pion === true){
		if ( marqueur["img"+coo] === query.actif){
			marqueur["img"+coo] = "solitaire_p1.png";
		}
	}else if ( marqueur["img"+coo] === "solitaire_l.png"){
	}else if (marqueur["img"+coo] === "solitaire_p1.png"){
		marqueur["img"+coo] = "solitaire_p2.png";
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
