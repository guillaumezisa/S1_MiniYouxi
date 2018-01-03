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
	var x ; 							  // AXE X
	var y ; 							  // AXE Y
	var coo;                     // COORDONNÉE
	var ps							  // PION SELECTIONNER
	var plateau ;
	var now ;		
	var ndpb ; 						  // NOMBRE DE PION BLOQUÉ
	var fichier ;
	var membre ;

	// CHARGEMENT DU JSON
	now = fs.readFileSync("solitaire_partie_"+query.pseudo+".json","UTF-8");
	plateau = JSON.parse(now);
		
	// SELECTIONNE OU DESELECTIONNE UN PION
	coo = query.place;
	if ( plateau[coo[0]][coo[1]] === 1){
		// PASSIF -> ACITF
		if (plateau[8] == 0 ){
			plateau[coo[0]][coo[1]] = 2;
			plateau[8] = [coo];
		}else if ( plateau[8].length === 1){
			plateau[coo[0]][coo[1]] = 2;
			plateau[8] = [coo];
		}
	} else if ( plateau[coo[0]][coo[1]] === 2 ){
		// ACTIF -> PASIF
			plateau[coo[0]][coo[1]] = 1;
			plateau[8] = [0];
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
	
	// VERIFIE SI LE JOUEUR A PERDU & MODIFICATION DU MARQUEUR FIN
	fin = 0 ;
	ndpb = 0;

	for ( ver = 0 ; ver < 7 ; ver++ ) { 
		for ( hor = 0 ; hor < 7 ; hor++ ) {  
			for ( dver = -2 ; dver < 3 ; dver=dver+2 ) {
				for ( dhor = -2 ; dhor < 3; dhor=dhor+2 ) {
					if ( ver+dver < 0 || ver+dver > 7 || hor+dhor < 0 || hor+dhor > 7 ){
					}else{
						if( plateau[ver][hor] === 1 || plateau[ver][hor] === 2){
							if ( plateau[ver+dver][hor+dhor] === 3 && plateau[ver+dver/2][hor+dhor/2] === 1 ){
								fin = "nope";
							}else{ 
							}
						}else{
						}
					}
				}
			}
		}
	}
	
	// VERIFIE SI LE PARTIE EST FINI

	if ( fin === 0){
			
			// VERIFIE SI LE JOUEUR A GAGNER & MODIFICATION DU MARQUEUR FIN
		if (plateau[7] === 1){
			marqueur.fin = "<h1>TU AS GAGNER !</h1><br><center><img src='solitaire_gagner.jpeg'><form action='req_solitaire_rejouer'method='GET'><input type='hidden' name='pseudo' value='"+ query.pseudo +"'><button class='button3' name='action' value='Rejouer'><span>Rejouer</span></button></form><form action='req_solitaire_quitter'method='GET'><input type='hidden' name='pseudo' value='"+ query.pseudo +"'><button class='button3' name='action' value='quitter'><span>Quitter</span></button></form></center><br><br>";
			for ( ver = 0 ; ver < 7 ; ver ++){
				for ( hor = 0 ; hor < 7 ; hor++ ){
					marqueur["img"+String(ver)+String(hor)] = "";
				}
			}

			// ASSIGNEMENT DE POINTS 

			fichier = fs.readFileSYnc("membres.json","UTF-8");
			membre = JSON.parse(fichier);

			for ( i = 0 ; i < membre.length ; i++){
				if (membre[i].pseudo === query.pseudo){
					membre[i].score === Number(membre[i].score) + 100 ;
				}
			}

			membre = JSON.stringify( membre );
			fichier = fs.writeFileSync("membre.json",membre,'utf-8');

			// VERIFIE SI LE JOUEUR A PERDU & MODIFICATION DU MARQUEUR FIN
		} else {
			marqueur.fin = "<h1>TU AS PERDU !</h1><br><center><img src='solitaire_perdu.jpeg'><form action='req_solitaire_rejouer'method='GET'><input type='hidden' name='pseudo' value='"+ query.pseudo+"'><button class='button3' name='action' value='Rejouer'><span>Rejouer</span></button></form><form action='req_solitaire_quitter'method='GET'><input type='hidden' name='pseudo' value='"+query.pseudo+"'><button class='button3' name='action' value='quitter'><span>Quitter</span></button></form></center><br><br>";
			for ( ver = 0 ; ver < 7 ; ver ++){
				for ( hor = 0 ; hor < 7 ; hor++ ){
					marqueur["img"+String(ver)+String(hor)] = "";
				}
			}
		}
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
