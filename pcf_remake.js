// SPA du remake du pierre cisceau feuille

"use strict";

var jeu = function () {
    
	var body;
	var image;
	var liste_image;

	liste_image = ["main_0.png", "main_1.png", "main_2.png", "main_3.png", "main_4.png", "main_5.png", "main_6.png"]
	

	for (var idx = 0; idx < liste_image.length; idx += 1) {
		body = document.querySelector("body");
		image = document.createElement("img");
		image.setAttribute("src", liste_image[idx]);
		body.appendChild(image)
	}







}





window.addEventListener("load", jeu);
