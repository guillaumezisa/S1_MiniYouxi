// traitement de /req_solitaire_plateau_selection

"use strict";

var fs = require("fs");
require("remedial")

var trait = function (req, res, query) {
	var marqueur = [];
	var page;
	var fin;
	var ver;                     // VERTICAL
	var hor;                     // Horizontale
	var coo;                     // Coordonée
	var ps							  // Pion Selectionner
	var plateau ;
	var now ;
	var plateau ;
	var ndpb ; 						  // NOMBRE DE PION BLOQUÉ
	
	// CHARGEMENT DU JSON
	now = fs.readFileSync("solitaire_partie_"+query.pseudo+".json","UTF-8");
	plateau = JSON.parse(now);
		
	// VERIFIE SI LE JOUEUR A GAGNER

	if (plateau[7] === 1){
		fs.readFileSync("solitaire_gagner.html","utf-8");
	}

	// VERIFIE SI LE JOUEUR A PERDU
	fin = 0 ;
	ndpb = 0;

	for ( ver = 0 ; ver < 7 ; ver++ ) { 
		for ( hor = 0 ; hor < 7 ; hor++ ) {  
			if ( plateau[String(ver)+String(hor)] === 1){
				//	MOUVEMENT HAUT A BAS
				if ( plateau[String(Number(ver)-1)+hor] === 1){
					if ( plateau[String(Number(ver)-2)+hor] === 3){
				  		fin = false
					}	else {
						ndpb = ndpb+1;
					}
				// MOUVEMENT HAUT DROITE A BAS GAUCHE
				} else if (plateau[String(Number(ver)-1)+String(Number(hor)+1)] === 1){
					if ( plateau[String(Number(ver)-2)+String(Number(hor)+2)] === 3){
				  		fin = false
					}	else {
						ndpb = ndpb+1;
					}
				// MOUVEMENT DROITE A GAUCHE
				} else if ( plateau[ver+String(Number(hor)+1)] === 1){
					if ( plateau[ver+String(Number(hor)+2)] === 3){
				  		fin = false
					}	else {
						ndpb = ndpb+1;
					}
				// MOUVEMENT BAS DROITE A HAUT GAUCHE
				} else if ( plateau[String(Number(ver)+1)+String(Number(hor)+1)] === 1){
					if ( plateau[String(Number(ver)+2)+String(Number(hor)+2)] === 3){
				  		fin = false
					}	else {
						ndpb = ndpb+1;
					}
				// MOUVEMENT BAS A HAUT
				} else if ( plateau[String(Number(ver)+1)+hor] === 1){
					if ( plateau[String(Number(ver)+2)+hor] === 3){
				  		fin = false
					}	else {
						ndpb = ndpb+1;
					}
				// MOUVEMENT BAS GAUCHE A HAUT DROITE
				} else if ( plateau[String(Number(ver)+1)+String(Number(hor)-1)] === 1){
					if ( plateau[String(Number(ver)+2)+String(Number(hor)-2)] === 3){
				  		fin = false
					}	else {
						ndpb = ndpb+1;
					}
				// MOUVEMENT GAUCHE A DROITE
				} else if ( plateau[ver+String(Number(hor)-1)] === 1){
					if ( plateau[ver+String(Number(hor)-2)] === 3){
				  		fin = false
					} else {
					ndpb = ndpb+1;
					}
				// MOUVEMENT HAUT GAUCHE A BAS DROITE
				} else if ( plateau[String(Number(ver)-1)+String(Number(hor)-1)] === 1){
					if ( plateau[String(Number(ver)-2)+String(Number(hor)-2)] === 3){
				  		fin = false
					}	else {
						ndpb = ndpb+1;
					}
				}	else {
					ndpb = ndpb+1;
				}
			} else {
				ndpb = ndpb+1;
			}
		}
	}
	if ( ndpb  === 49){
		fs.readFileSync("solitaire_perdu.html","utf-8");
		console.log("OULALALALALA");
	}

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
