// traitement de /req_simon_phase_memorisation

"use strict";

var fs = require("fs");
require("remedial");
var page;
var marqueur;

var trait = function (req, res, query) {
	var partie ;		// NOM DU JSON DECOMPRESSER
	var couleur ;		// NUMERO D'UN COULEUR ALEATOIRE
	var tour ;			// NOMBRE DE TOURS
	var image ;			// LISTE RECONVERTIE EN STRING DE BOUTON
	var liste ;
	var i;				

	// CHARGEMENT DU JSON
   
	partie = fs.readFileSync("simon_partie_"+query.pseudo+".json");
	partie = JSON.parse( partie );
	
	// SUPRESSION DU JEU DU JOUEUR

	partie[2] = [0];
	partie[3] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	
	// GENERATION D'UNE COULEUR ALEATOIRE
	
	tour = partie[0];
	couleur = Math.floor(Math.random()*4+1);	
	partie[1][tour] = couleur;

	console.log("TOUR"+tour);
	console.log("COULEUR"+couleur);
	console.log("PARTIE"+ partie[1]);
	console.log("PARTIE DU TOUR "+partie[1][tour]);
	
	// DECHARGEMENT DE LA LISTE DANS UNE STRING 
	liste = [] ;
	for ( i = 0 ; i < tour+1 ; i++ ){
		console.log("BOUCLE1");
		liste.push(partie[1][i]);
	}
	console.log(liste);	
	
	// CREATION DES MARQUEURS
	
	marqueur = {}
	marqueur.pseudo = query.pseudo
	
	for ( i = 0 ; i < tour+1 ; i++ ){
		//BOUCLE 2
		if ( liste[i] === 1 ){
			if ( i === 0){
				image = "<img width='50' src='simon_bleu.png'>";
			}else{
				image = image+"<img width='50'src='simon_bleu.png'>";
			}	
		}else if ( liste[i] === 2 ){
			if ( i === 0){
				image = "<img width='50' src='simon_rouge.png'>";
			}else{
				image = image+"<img width='50'src='simon_rouge.png'>";
			}	
		
		}else if ( liste[i] === 3 ){
			if ( i === 0){
				image = "<img width='50'src='simon_vert.png'>";
			}else{
				image = image+"<img width='50'src='simon_vert.png'>";
			}	
		
		}else if ( liste[i] === 4 ){
			if ( i === 0){
				image = "<img width='50' src='simon_jaune.png'>";
			}else{
				image = image+"<img width='50' src='simon_jaune.png'>";
			}	

		}
	}
	marqueur.couleur = image ;
	console.log(typeof partie[0]+"wazaaaabi");
	// ENREGISTREMENT DU JSON
	
	partie[0] = [Number(partie[0])+1];	
	partie =JSON.stringify(partie);
	fs.writeFileSync("simon_partie_"+query.pseudo+".json",partie,"UTF-8");
	
	
	// ENVOIE DE LA PAGE
	page = fs.readFileSync("simon_phase_memorisation.html", "UTF-8");
	page = page.supplant(marqueur)

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
