// SPA du remake du pierre cisceau feuille

"use strict";

var choix_joueur;   // Putain mais c'est vraiment trop moche de faice ça aves des variables globales
var choix_ordi;
var estimation_ordi;
var estimation_joueur;
var pseudo

var recup_pseudo = function (pseudo_joueur) {
// C'est moche les variables globales
    pseudo = pseudo_joueur
};

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

var affiche_page_resultat = function(choix_du_joueur, estimation_du_joueur, choix_de_ordi, estimation_de_ordi, winner) {
// fonction qui efface le body pour ensuite afficher les resultats
    var body = document.querySelector("body");
	var image_joueur;
	var image_ordi;
	var estimation;
	var span;
	var bouton;
	var hidden;
	var center;
	var form;

	body.innerHTML = "";
	
	// et un autre pour retrourner a l'accueil membre Miniyouxi
	form = document.createElement("form");
	form.setAttribute("action", "/req_quitter_pcf_remake");
	form.setAttribute("method", "GET");

	hidden = document.createElement("input")
	hidden.setAttribute("type", "hidden");
	hidden.setAttribute("name", "pseudo");
	hidden.setAttribute("value", pseudo);

	bouton = document.createElement("button");
	bouton.setAttribute("class", "button");
	bouton.setAttribute("name", "bouton accueil");
	bouton.setAttribute("value", "accueil");
	bouton.innerHTML = "Accueil";
	
    form.appendChild(hidden);
	form.appendChild(bouton);
	body.appendChild(form);

	body.appendChild(document.createElement("br"));
	body.appendChild(document.createElement("br"));

	// On affiche les resultats
	center = document.createElement("center");
	span = document.createElement("span");
	span.innerHTML = "La main du joueur: "
	center.appendChild(span);
	
	span = document.createElement("span");
	span.innerHTML = "La main de l'ordinateur: ";
	center.appendChild(span);
	body.appendChild(center);

	body.appendChild(document.createElement("br"));

	center = document.createElement("center");
	image_joueur = document.createElement("img");
	image_joueur.setAttribute("name", "choix du joueur");
	image_joueur.setAttribute("src", "main_" + choix_du_joueur + ".png");
	center.appendChild(image_joueur);

	image_ordi = document.createElement("img");
	image_ordi.setAttribute("name", "choix de ordi");
	image_ordi.setAttribute("src", "main_" + choix_de_ordi + ".png");
	center.appendChild(image_ordi);
	body.appendChild(center);

	center = document.createElement("center");
	estimation = document.createElement("h1");
	estimation.innerHTML = "Le total est de " + String(Number(choix_du_joueur) + Number(choix_de_ordi))
	center.appendChild(estimation);
	body.appendChild(center);

	center = document.createElement("center");
	span = document.createElement("span");
	span.innerHTML = "L'estimation du joueur est de " + String(estimation_du_joueur) + " et l'estimation de l'ordi est de " + String(estimation_de_ordi) + ".";
	center.appendChild(span);
	body.appendChild(center);


	body.appendChild(document.createElement("br"));
	body.appendChild(document.createElement("br"));

	center = document.createElement("center");
	span = document.createElement("span");
	span.innerHTML = winner;
	center.appendChild(span);
	body.appendChild(center);

	body.appendChild(document.createElement("br"));
	body.appendChild(document.createElement("br"));

    // On fait un boutton pour que le joueur puisse faire une partie suivante

	center = document.createElement("center");
	bouton = document.createElement("button");
	bouton.setAttribute("class", "button3");
	bouton.setAttribute("name", "bouton rejouer");
	bouton.setAttribute("value", "rejouer");
	bouton.innerHTML = "Rejouer";
	bouton.addEventListener("click", jeu);

	center.appendChild(bouton);
	body.appendChild(center);
	
};

    

var manche_jeu = function(choix_du_joueur, estimation_du_joueur, liste) {
// Fonction qui calcule qui gagne et qui affiche les resultats
    
	var total;
	var equart_joueur;
	var equart_ordi;
	var gagnant;

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
		gagnant = "Il y a égalité.";
    } else if (equart_joueur > equart_ordi) {
	    console.log("l'ordi gagne");
		gagnant = "L'ordinateur gagne.";
    } else if (equart_joueur < equart_ordi) {
	    console.log("le joueur gagne");
		gagnant = "Vous gagnez."
	}


	// fonction pour afficher la page des resultas
	affiche_page_resultat(choix_du_joueur, estimation_du_joueur, choix_ordi, estimation_ordi, gagnant);
	
};



var jeu = function () {
// Fonction qui affiche la page pour les choix du joueur
    
	var body;
	var image;
	var liste_image;
	var br = document.createElement("br");
	var bouton;
	var center;

	liste_image = ["main_0.png", "main_1.png", "main_2.png", "main_3.png", "main_4.png", "main_5.png", "main_6.png"]
	
	body = document.querySelector("body");

	body.innerHTML = "";

    center = document.createElement("center");
	// On affiche les imager et on leurs donne l'attribut click
	for (var idx = 0; idx < liste_image.length; idx += 1) {
		image = document.createElement("img");
		image.setAttribute("id", String(idx));
		image.setAttribute("src", liste_image[idx]);
		center.appendChild(image);
		image.addEventListener("click", definir_choix_joueur);
	}

	body.appendChild(center);
    body.appendChild(br)

    center = document.createElement("center");
	// On genere les boutons
	for (var idx = 0; idx < 13; idx += 1) {

		bouton = document.createElement("button");
		bouton.setAttribute("class", "button4");
		bouton.setAttribute("name", "valeur " + String(idx));
		bouton.setAttribute("value", String(idx));
		
		// On ecris du HTML dirrectement entre les deux balises "bouton"
		bouton.innerHTML = String(idx);

		center.appendChild(bouton);
		bouton.addEventListener("click", definir_valeur_estimer);

	}
	body.appendChild(center);
};





window.addEventListener("load", jeu);
