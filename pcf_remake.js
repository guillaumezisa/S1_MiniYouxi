// SPA du remake du pierre cisceau feuille

"use strict";

var choix_joueur;   // Putain mais c'est vraiment trop moche de faice ça aves des variables globales
var choix_ordi;
var estimation_ordi;
var estimation_joueur;



var definir_choix_joueur = function (e) {

    choix_joueur = e.target.getAttribute("id");

	// On lance la manche si l'estimation est définis
	if (estimation_joueur) {
	    manche_jeu(choix_joueur, estimation_joueur, definir_valeur_ordi());
		choix_joueur = undefined
		estimation_joueur = undefined
	}

};

var definir_valeur_estimer = function (e) {

    estimation_joueur = e.target.getAttribute("value");
	
	// On lance la manche si le choix est définis
	if (choix_joueur) {
	    manche_jeu(choix_joueur, estimation_joueur, definir_valeur_ordi());
		choix_joueur = undefined
		estimation_joueur = undefined
	}

};



var definir_valeur_ordi = function() {

	choix_ordi = Math.floor(Math.random() * 7);
	estimation_ordi = Math.floor(Math.random() * (13 - choix_ordi)) + choix_ordi;

	return [choix_ordi, estimation_ordi];
};

var affiche_page_resultat = function(choix_du_joueur, estimation_du_joueur, choix_de_ordi, estimation_de_ordi) {
// fonction qui efface le body pour ensuite a fficher les resultats
	var br = document.createElement("br");
    var body = document.querySelector("body");
	var image_joueur;
	var image_ordi;
    var estimation_joueur;
	var estimation_ordi;

	body.innerHTML = ""

	image_joueur = document.createElement("img");
	image_joueur.setAttribute("name", "choix du joueur");
	image_joueur.setAttribute("src", "main_" + choix_du_joueur + ".png");
	body.appendChild(image_joueur);

	image_ordi = document.createElement("img");
	image_ordi.setAttribute("name", "choix de ordi");
	image_ordi.setAttribute("src", "main_" + choix_de_ordi + ".png");
	body.appendChild(image_ordi);

	estimation_joueur = document.createElement("h1");
	estimation_joueur.innerHTML = estimation_du_joueur;
	body.appendChild(estimation_joueur);

	estimation_ordi = document.createElement("h1");
	estimation_ordi.innerHTML = estimation_de_ordi;
	body.appendChild(estimation_ordi);

	
};

    

var manche_jeu = function(choix_du_joueur, estimation_du_joueur, liste) {
// Fonction qui calcule qui gagne et qui affiche les resultats
    
	var total;
	var equart_joueur;
	var equart_ordi;

    liste = definir_valeur_ordi();
	choix_ordi = liste[0];
	estimation_ordi = liste[1];

	console.log(choix_ordi, estimation_ordi, choix_du_joueur, estimation_du_joueur);

    total = Number(choix_du_joueur) + Number(choix_ordi);

	console.log(total);

	equart_joueur = Math.abs(Number(estimation_du_joueur) - total);
	equart_ordi = Math.abs(Number(estimation_ordi) - total);

	console.log(equart_ordi, equart_joueur);

	if (equart_joueur === equart_ordi) {
	    console.log("egalité");
    } else if (equart_joueur > equart_ordi) {
	    console.log("l'ordi gagne");
    } else if (equart_joueur < equart_ordi) {
	    console.log("le joueur gagne");
	}


	// inserer une fonction pour afficher la page des resultas
	affiche_page_resultat(choix_du_joueur, estimation_du_joueur, choix_ordi, estimation_ordi);
	
};



var jeu = function () {
// Fonction qui affiche la page pour les choix du joueur
    
	var body;
	var image;
	var liste_image;
	var br = document.createElement("br");
	var bouton;

	liste_image = ["main_0.png", "main_1.png", "main_2.png", "main_3.png", "main_4.png", "main_5.png", "main_6.png"]
	
	body = document.querySelector("body");

	// On affiche les imager et on leurs donne l'attribut click
	for (var idx = 0; idx < liste_image.length; idx += 1) {
		image = document.createElement("img");
		image.setAttribute("id", String(idx));
		image.setAttribute("src", liste_image[idx]);
		body.appendChild(image);
		image.addEventListener("click", definir_choix_joueur);
	}

    body.appendChild(br)

	// On genere les boutons
	for (var idx = 0; idx < 13; idx += 1) {

		bouton = document.createElement("button");
		bouton.setAttribute("name", "valeur " + String(idx));
		bouton.setAttribute("value", String(idx));
		
		// On ecris du HTML dirrectement entre les deux balises "bouton"
		bouton.innerHTML = String(idx);

		body.appendChild(bouton);
		bouton.addEventListener("click", definir_valeur_estimer);

	}
};





window.addEventListener("load", jeu);
