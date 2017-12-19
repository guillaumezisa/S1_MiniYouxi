// traitement de /req_solitaire_plateau_selection

"use strict";

var fs = require("fs");
require("remedial")

var trait = function (req, res, query) {
	var marqueur = [];
	var page;
	var fin;
	var ver;                     // VERTICAL
	var hor;                     // HORIZONTALE
	var dver;						  // DIRECTION VERTICALE
	var dhor;						  // DIRECTION HORIZONTALE	
	var coo;                     // COORDONNÉE
	var ps							  // PION SELECTIONNER
	var plateau ;
	var now ;		
	var ndpb ; 						  // NOMBRE DE PION BLOQUÉ
	
	// CHARGEMENT DU JSON
	now = fs.readFileSync("solitaire_partie_"+query.pseudo+".json","UTF-8");
	plateau = JSON.parse(now);
		
	// SELECTIONNE OU DESELECTIONNE UN PION
	
	coo = query.place;
	
	if ( plateau[coo[0]][coo[1]] === 1 ){
		// PASSIF -> ACITF
		plateau[coo[0]][coo[1]] = 2;
	} else if ( plateau[coo[0]][coo[1]] === 2 ){
		// ACTIF -> PASIF
		plateau[coo[0]][coo[1]] = 1;
	} else if ( plateau[coo[0]][coo[1]] === 3 ){
		plateau[coo[0]][coo[1]] = 3;
	}
	

	// ASSIGNEMENT DES MARQUEURS
	marqueur = {};	
	marqueur.pseudo = query.pseudo;
	marqueur.fin = "";
	
	for ( ver = 0 ; ver < 7 ; ver ++){
		for ( hor = 0 ; hor < 7 ; hor++ ){
			if(plateau[ver][hor] === 1){
				marqueur["img"+String(ver)+String(hor)] = "solitaire_p1.png";
			}else if(plateau[ver][hor] === 2){
				marqueur["img"+String(ver)+String(hor)] = "solitaire_p2.png";
			}else if(plateau[ver][hor] === 3){
				marqueur["img"+String(ver)+String(hor)] = "solitaire_l.png";
			}
		}
	}	
	
	// VERIFIE SI LE JOUEUR A PERDU & MODIFICATION DU MARQUEUR FIN
	fin = 0 ;
	ndpb = 0;

	for ( ver = 0 ; ver < 7 ; ver++ ) { 
		for ( hor = 0 ; hor < 7 ; hor++ ) {  
			for ( dver = -2 ; dver < 3 ; dver=dver+2 ) {
				for ( dhor = -2 ; dhor < 3; dhor=dhor+2 ) {
					if ( ver+dver < 0 || ver+dver > 7 || hor+dhor < 0 || hor+dhor > 7 ){
						ndpb++;
					}else{
						if( plateau[ver][hor] === 1 ){
							if ( plateau[ver+dver][hor+dhor] === 3 && plateau[ver+dver/2][hor+dhor/2] === 1 ){
								fin = "nope"
							}else{ 
								ndpb++
							}
						}else{
							ndpb++;		
						}
					}
				}
			}
		}
	}
	console.log(fin);
	
	if ( fin === 0){
		marqueur.fin = "<h1>TU AS PERDU !</h1><br><center><form action='req_solitaire_rejouer'method='GET'><input type='hidden' name='pseudo' value='{pseudo}'><button class='button3' name='action' value='Rejouer'><span>Rejouer</span></button></form><form action='req_solitaire_quitter'method='GET'><input type='hidden' name='pseudo' value='{pseudo}'><button class='button3' name='action' value='quitter'><span>Quitter</span></button></form></center><br><br>"
	} else { 
		marqueur.fin = "";
	}
	// VERIFIE SI LE JOUEUR A GAGNER & MODIFICATION DU MARQUEUR FIN
	if (plateau[7] === 1){
		marqueur.fin = "<h1>TU AS GAGNER !</h1><center><form action='req_solitaire_rejouer'method='GET'><input type='hidden' name='pseudo' value='{pseudo}'><button class='button3' name='action' value='Rejouer'><span>Rejouer</span></button></form><form action='req_solitaire_quitter'method='GET'><input type='hidden' name='pseudo' value='{pseudo}'><button class='button3' name='action' value='quitter'><span>Quitter</span></button></form></center><br><br>"
	} else {
		marqueur.fin ="";
	}

	// MODIFICATION DU JSON
	now  = JSON.stringify(plateau);
	plateau =fs.writeFileSync("solitaire_partie_"+query.pseudo+".json",now,"utf-8")

	// ENVOIE DE LA PAGE	
	page = fs.readFileSync("solitaire_plateau_selection.html", "UTF-8");
	page = page.supplant(marqueur)
	
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
