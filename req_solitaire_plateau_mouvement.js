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
	var pion;
	var imgp;                     //Image passive
	var imga;                     //Image active
	var imgl;                     //Image libre
	var ca = [];                  // Case active

	marqueur.pseudo = query.pseudo;
	marqueur = fs.readFileSync("./solitaire_"+query.pseudo+".json","UTF-8");
	marqueur = JSON.parse(marqueur);
	nbp = fs.readFileSync("./solitaire_nbp_"+query.pseudo+".json","UTF-8");
	nbp = JSON.parse(nbp);
	ca = fs.readFileSync("./solitaire_case_active_"+query.pseudo+".txt","UTF-8");
	
	//Si nombre de pion = 1 afficher page de fin .
	if (nbp.score === 1){
		fs.readFileSync("solitaire_fin.html","UTF-8");
	}
	
	coo = query.place;
	
	imgp = "solitaire_p1.png";
	imga = "solitaire_p2.png";
	imgl = "solitaire_l.png";

	pion = false ;
	for ( ver = 0 ; ver < 7 ; ver++){
		for ( hor = 0 ; hor < 7 ; hor++){
			if(marqueur["case"+String(ver)+String(hor)] === imga){	
				pion = true;
			}
		}
	}
	if (pion === true){
		if ( marqueur["case"+coo] === imga){
			marqueur["case"+coo] = imgp;
		}
	}
	if( marqueur["case"+coo] === imgl){	
		if ( coo === (ca[0])+(String(Number(ca[1])-2)) && marqueur["case"+(ca[0]+(String(Number(ca[1])-1)))] === imgp) {
			marqueur["case"+coo] = imgp;
			marqueur["case"+(ca[0]+(String(Number(ca[1])-1)))] = imgl;
			marqueur["case"+ca] = imgl;
			console.log("Solitaire|"+query.pseudo+"|Mouvement de droite a gauche");
		}else if (coo === (String(Number(ca[0])+2))+(String(Number(ca[1])-2)) && marqueur["case"+(String(Number(ca[0])+1))+(String(Number(ca[1])-1))] === imgp){
			marqueur["case"+coo] = imgp;
			marqueur["case"+(String(Number(ca[0])+1))+(String(Number(ca[1])-1))] = imgl;
			marqueur["case"+ca] = imgl;
			console.log("Solitaire|"+query.pseudo+"|Mouvement de bas gauche a haut droite");
		}else if (coo === (String(Number(ca[0])+2))+(ca[1]) && marqueur["case"+(String(Number(ca[0])+1))+(ca[1])] === imgp ){
			marqueur["case"+coo] = imgp;
			marqueur["case"+(String(Number(ca[0])+1)+(ca[1]))] = imgl;
			marqueur["case"+ca] = imgl;
			console.log("Solitaire|"+query.pseudo+"|Mouvement de haut a bas")
		}else if (coo === (String(Number(ca[0])+2))+(String(Number(ca[1])+2))&& marqueur["case"+(String(Number(ca[0]+1)))+(String(Number(ca[1])+1))] === imgp){
			marqueur["case"+coo] = imgp;
			marqueur["case"+(String(Number(ca[0])+1))+(String(Number(ca[1])+1))] = imgl;
			marqueur["case"+ca] = imgl;
			console.log("Solitaire|"+query.pseudo+"|Mouvement de haut gauche a bas droite")
		}else if (coo === (ca[0])+(String(Number(ca[1])+2))&& marqueur["case"+(ca[0])+(String(Number(ca[1])+1))]=== imgp){
			marqueur["case"+coo] = imgp;
			marqueur["case"+(ca[0]+(String(Number(ca[1])+1)))] = imgl;
			marqueur["case"+ca] = imgl;
			console.log("Solitaire|"+query.pseudo+"|Mouvement de gauche a droite");
		}else if (coo === (String(Number(ca[0])-2))+(String(Number(ca[1])+2))&& marqueur["case"+(String(Number(ca[0])-1))+(String(Number(ca[1])+1))] === imgp){
			marqueur["case"+coo] = imgp;
			marqueur["case"+(String(Number(ca[0])-1)+(String(Number(ca[1])+1)))] = imgl;
			marqueur["case"+ca] = imgl;
			console.log("Solitaire|"+query.pseudo+"|Mouvement de bas gauche a haut droite");
		}else if (coo === (String(Number(ca[0])-2))+(ca[1]) && marqueur["case"+(String(Number(ca[0])-1))+(ca[1])] === imgp){
			marqueur["case"+coo] = imgp;
			marqueur["case"+(String(Number(ca[0])-1))+(String(Number(ca[1])))] = imgl;
			marqueur["case"+ca] = imgl;
			console.log("Solitaire|"+query.pseudo+"|Mouvement de bas a haut");
		}else if (coo === (String(Number(ca[0])-2))+(String(Number(ca[1])-2))&& marqueur["case"+(String(Number(ca[0])-1))+(String(Number(ca[1])-1))] === imgp){  
			marqueur["case"+coo] = imgp;
			marqueur["case"+(String(Number(ca[0]-1))+(String(Number(ca[1])-1)))] = imgl;
			marqueur["case"+ca] = imgl;
			console.log("Solitaire|"+query.pseudo+"|Mouvement de bas droite a haut gauche")
		}else{
			console.log("ERREUR");
			console.log(coo[0] , coo[1]);
		}
	}else{
		console.log("POULET BWAISER")
	}

	 console.log("waza"+(ca[0])+(ca[1]-2));
	console.log("Le joueur "+query.pseudo+" a cibler la case "+String (coo[0]+coo[1]));
	console.log("La case active du joueur est "+ca);

	// ENVOI PAGE MISE A JOUR
	
	page = fs.readFileSync("solitaire_plateau_mouvement.html", "UTF-8");
	page = page.supplant(marqueur)
	fs.writeFileSync("solitaire_case_active_"+query.pseudo+".txt",ca,"utf-8")
	marqueur = JSON.stringify(marqueur);
	fs.writeFileSync("solitaire_"+query.pseudo+".json",marqueur,"utf-8")
	
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
