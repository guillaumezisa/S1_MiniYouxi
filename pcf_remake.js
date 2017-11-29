// SPA du remake du pierre cisceau feuille

"use strict";

var definir_valeur_jouer = function (e) {
    .
}


var jeu = function () {
    
	var body;
	var image;
	var liste_image;

	liste_image = ["main_0.png", "main_1.png", "main_2.png", "main_3.png", "main_4.png", "main_5.png", "main_6.png"]
	
	body = document.querySelector("body");

	for (var idx = 0; idx < liste_image.length; idx += 1) {
		image = document.createElement("img");
		image.setAttribute("id", idx);
		image.setAttribute("src", liste_image[idx]);
		body.appendChild(image)
		image.addEventListener("click", inserer une fonction);
	}

    







}





window.addEventListener("load", jeu);
