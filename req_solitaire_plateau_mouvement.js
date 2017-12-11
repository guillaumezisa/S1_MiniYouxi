// traitement de /req_solitaire_plateau_mouvement
//VOIR POUR UNE CONDITION CLIQUE CASE LIBRE
//VOIR BOUCLE QUI VERIFIE que le joueur peut jouer
//OPTIMISATION DU CODE
//FIN

"use strict";

var fs = require("fs");
require("remedial")
var trait = function (req, res, query) {
	var page;
	var marqueur = [];
	var nbp;                      // Nombre de pion
	var ver;                      // Vertical
	var hor;                      // Horizontale
	var coo;                      // Coordonée
	var pion;							//
	var imgp;                     //Image passive
	var imga;                     //Image active
	var imgl;                     //Image libre

	marqueur.pseudo = query.pseudo;
	marqueur = fs.readFileSync("./solitaire_partie_"+query.pseudo+".json","UTF-8");
	marqueur = JSON.parse(marqueur);
	
	//Si nombre de pion = 1 afficher page de fin .
	if (marqueur.pion === 1){
	}
	
	coo = query.place;
	
	imgp = "solitaire_p1.png";
	imga = "solitaire_p2.png";
	imgl = "solitaire_l.png";

	pion = false ;
	for ( ver = 0 ; ver < 7 ; ver++){
		for ( hor = 0 ; hor < 7 ; hor++){
			if(marqueur["img"+String(ver)+String(hor)] === imga){	
				pion = true;
			}
		}
	}
	if (pion === true){
		if ( marqueur["img"+coo] === imga){
			marqueur["img"+coo] = imgp;
		}
	}
	if( marqueur["img"+coo] === imgl){	
		if ( coo === (marqueur.actif[0])+(String(Number(marqueur.actif[1])-2)) && marqueur["img"+(marqueur.actif[0]+(String(Number(marqueur.actif[1])-1)))] === imgp) {
			marqueur["img"+coo] = imgp;
			marqueur["img"+(marqueur.actif[0]+(String(Number(marqueur.actif[1])-1)))] = imgl;
			marqueur["img"+marqueur.actif] = imgl;
			marqueur["case"+coo] = 1;
			marqueur["case"+(marqueur.actif[0]+(String(Number(marqueur.actif[1])-1)))] = 0;
			marqueur["case"+marqueur.actif] = 0;
			console.log("Solitaire|"+query.pseudo+"|Mouvement de droite a gauche");
			marqueur.pion = Number(marqueur.pion-1);
		}else if (coo === (String(Number(marqueur.actif[0])+2))+(String(Number(marqueur.actif[1])-2)) && marqueur["img"+(String(Number(marqueur.actif[0])+1))+(String(Number(marqueur.actif[1])-1))] === imgp){
			marqueur["img"+coo] = imgp;
			marqueur["img"+(String(Number(marqueur.actif[0])+1))+(String(Number(marqueur.actif[1])-1))] = imgl;
			marqueur["img"+marqueur.actif] = imgl;
			marqueur["case"+coo] = 1;
			marqueur["case"+(String(Number(marqueur.actif[0])+1))+(String(Number(marqueur.actif[1])-1))] = 0;
			marqueur["case"+marqueur.actif] = 0;
			console.log("Solitaire|"+query.pseudo+"|Mouvement de bas gauche a haut droite");
			marqueur.pion = Number(marqueur.pion-1);
		}else if (coo === (String(Number(marqueur.actif[0])+2))+(marqueur.actif[1]) && marqueur["img"+(String(Number(marqueur.actif[0])+1))+(marqueur.actif[1])] === imgp ){
			marqueur["img"+coo] = imgp;
			marqueur["img"+(String(Number(marqueur.actif[0])+1)+(marqueur.actif[1]))] = imgl;
			marqueur["img"+marqueur.actif] = imgl;
			marqueur["case"+coo] = 1;
			marqueur["case"+(String(Number(marqueur.actif[0])+1)+(marqueur.actif[1]))] = 0;
			marqueur["case"+marqueur.actif] = 0;
			console.log("Solitaire|"+query.pseudo+"|Mouvement de haut a bas")
			marqueur.pion = Number(marqueur.pion-1);
		}else if (coo === (String(Number(marqueur.actif[0])+2))+(String(Number(marqueur.actif[1])+2))&& marqueur["img"+(String(Number(marqueur.actif[0])+1))+(String(Number(marqueur.actif[1])+1))] === imgp){
			marqueur["img"+coo] = imgp;
			marqueur["img"+(String(Number(marqueur.actif[0])+1))+(String(Number(marqueur.actif[1])+1))] = imgl;
			marqueur["img"+marqueur.actif] = imgl;
			marqueur["case"+coo] = 1;
			marqueur["case"+(String(Number(marqueur.actif[0])+1))+(String(Number(marqueur.actif[1])+1))] = 0;
			marqueur["case"+marqueur.actif] = 0;
			console.log("Solitaire|"+query.pseudo+"|Mouvement de haut gauche a bas droite")
			marqueur.pion = Number(marqueur.pion-1);
		}else if (coo === (marqueur.actif[0])+(String(Number(marqueur.actif[1])+2))&& marqueur["img"+(marqueur.actif[0])+(String(Number(marqueur.actif[1])+1))]=== imgp){
			marqueur["img"+coo] = imgp;
			marqueur["img"+(marqueur.actif[0]+(String(Number(marqueur.actif[1])+1)))] = imgl;
			marqueur["img"+marqueur.actif] = imgl;
			marqueur["case"+coo] = 1;
			marqueur["case"+(marqueur.actif[0]+(String(Number(marqueur.actif[1])+1)))] = 0;
			marqueur["case"+marqueur.actif] = 0;
			console.log("Solitaire|"+query.pseudo+"|Mouvement de gauche a droite");
			marqueur.pion = Number(marqueur.pion-1);
		}else if (coo === (String(Number(marqueur.actif[0])-2))+(String(Number(marqueur.actif[1])+2))&& marqueur["img"+(String(Number(marqueur.actif[0])-1))+(String(Number(marqueur.actif[1])+1))] === imgp){
			marqueur["img"+coo] = imgp;
			marqueur["img"+(String(Number(marqueur.actif[0])-1)+(String(Number(marqueur.actif[1])+1)))] = imgl;
			marqueur["img"+marqueur.actif] = imgl;
			marqueur["case"+coo] = 1;
			marqueur["case"+(String(Number(marqueur.actif[0])-1)+(String(Number(marqueur.actif[1])+1)))] = 0;
			marqueur["case"+marqueur.actif] = 0;
			console.log("Solitaire|"+query.pseudo+"|Mouvement de bas gauche a haut droite");
			marqueur.pion = Number(marqueur.pion-1);
		}else if (coo === (String(Number(marqueur.actif[0])-2))+(marqueur.actif[1]) && marqueur["img"+(String(Number(marqueur.actif[0])-1))+(marqueur.actif[1])] === imgp){
			marqueur["img"+coo] = imgp;
			marqueur["img"+(String(Number(marqueur.actif[0])-1))+(String(Number(marqueur.actif[1])))] = imgl;
			marqueur["img"+marqueur.actif] = imgl;
			marqueur["case"+coo] = 1;
			marqueur["case"+(String(Number(marqueur.actif[0])-1))+(String(Number(marqueur.actif[1])))] = 0;
			marqueur["case"+marqueur.actif] = 0;
			console.log("Solitaire|"+query.pseudo+"|Mouvement de bas a haut");
			marqueur.pion = Number(marqueur.pion-1);
		}else if (coo === (String(Number(marqueur.actif[0])-2))+(String(Number(marqueur.actif[1])-2))&& marqueur["img"+(String(Number(marqueur.actif[0])-1))+(String(Number(marqueur.actif[1])-1))] === imgp){  
			marqueur["img"+coo] = imgp;
			marqueur["img"+(String(Number(marqueur.actif[0]-1))+(String(Number(marqueur.actif[1])-1)))] = imgl;
			marqueur["img"+marqueur.actif] = imgl;
			marqueur["case"+coo] = 1;
			marqueur["case"+(String(Number(marqueur.actif[0]-1))+(String(Number(marqueur.actif[1])-1)))] = 0;
			marqueur["case"+marqueur.actif] = 0;
			console.log("Solitaire|"+query.pseudo+"|Mouvement de bas droite a haut gauche")
			marqueur.pion = Number(marqueur.pion-1);
		}else{
			console.log("ERREUR");
			console.log(coo[0] , coo[1]);
		}
	}else{
		console.log("POULET BWAISER")
	}
	console.log("Le joueur "+query.pseudo+" a cibler la img "+String (coo[0]+coo[1]));
	console.log("La img active du joueur est "+marqueur.actif);

	// ENVOI PAGE MISE A JOUR
	
	page = fs.readFileSync("solitaire_plateau_mouvement.html", "UTF-8");
	page = page.supplant(marqueur)
	marqueur = JSON.stringify(marqueur);
	fs.writeFileSync("solitaire_partie_"+query.pseudo+".json",marqueur,"utf-8")
	
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
