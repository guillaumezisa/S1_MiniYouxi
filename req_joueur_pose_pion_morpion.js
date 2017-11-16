// traitement de /req_jouer_morpion

"use strict";

var fs = require("fs");
require("remedial")
var page;
var marqueur;
var places;
var nb
var piece
var position

var trait = function (req, res, query) {
    

	marqueur = fs.readFileSync("./information_plateau_morpion.json", "UTF-8")
	marqueur = JSON.parse(marqueur);

	places = fs.readFileSync("./places_disponible_morpion.json")
	places = JSON.parse(places);

    position = fs.readFileSync("./position_morpion.json", "UTF-8");
	position = JSON.parse(position);



    if ("place00" in query && marqueur.val00 === "libre"){
	    marqueur.val00 = "joueur"
		position[0][0] = "joueur"
		marqueur.case00 = "carre_jaune.jpg"
		places.splice(places.indexOf("place00"), 1)
	}
	
    if ("place10" in query && query.place10 === "libre"){
	    marqueur.val10 = "joueur"
		position[0][1] = "joueur"
		marqueur.case10 = "carre_jaune.jpg"
		places.splice(places.indexOf("place10"), 1)
	}
	
    if ("place20" in query && query.place20 === "libre"){
	    marqueur.val20 = "joueur"
		position[0][2] = "joueur"
		marqueur.case20 = "carre_jaune.jpg"
		places.splice(places.indexOf("place20"), 1)
	}

    if ("place01" in query && query.place01 === "libre"){
	    marqueur.val01 = "joueur"
		position[1][0] = "joueur"
		marqueur.case01 = "carre_jaune.jpg"
		places.splice(places.indexOf("place01"), 1)
	}
	
    if ("place11" in query && query.place11 === "libre"){
	    marqueur.val11 = "joueur"
		position[1][1] = "joueur"
		marqueur.case11 = "carre_jaune.jpg"
		places.splice(places.indexOf("place11"), 1)
	}
	    
    if ("place21" in query && query.place21 === "libre"){
	    marqueur.val21 = "joueur"
		position[1][2] = "joueur"
		marqueur.case21 = "carre_jaune.jpg"
		places.splice(places.indexOf("place21"), 1)
	}

    if ("place02" in query && query.place02 === "libre"){
	    marqueur.val02 = "joueur"
		position[2][0] = "joueur"
		marqueur.case02 = "carre_jaune.jpg"
		places.splice(places.indexOf("place02"), 1)
	}
	    
    if ("place12" in query && query.place12 === "libre"){
	    marqueur.val12 = "joueur"
		position[2][1] = "joueur"
		marqueur.case12 = "carre_jaune.jpg"
		places.splice(places.indexOf("place12"), 1)
	}

    if ("place22" in query && query.place22 === "libre"){
	    marqueur.val22 = "joueur"
		position[2][2] = "joueur"
		marqueur.case22 = "carre_jaune.jpg"
		places.splice(places.indexOf("place22"), 1)
	}


	nb = Math.floor(Math.random() * places.length - 1) + 1

	piece = places[nb]

	switch (piece) {
	    case "place00":
		    marqueur.val00 = "ordi";
			position[0][0] = "ordi"
			marqueur.case00 = "carre_bleu.png";
			places.splice(places.indexOf("place00"), 1)
			break;
		case "place10":
		    marqueur.val10 = "ordi";
			position[0][1] = "ordi"
			marqueur.case10 = "carre_bleu.png"
			places.splice(places.indexOf("place10"), 1)
			break;
		case "place20":
		    marqueur.val20 = "ordi";
			position[0][2] = "ordi"
			marqueur.case20 = "carre_bleu.png"
			places.splice(places.indexOf("place20"), 1)
			break;
		case "place01":
		    marqueur.val01 = "ordi";
			position[1][0] = "ordi"
			marqueur.case01 = "carre_bleu.png"
			places.splice(places.indexOf("place01"), 1)
			break;
		case "place11":
		    marqueur.val11 = "ordi";
			position[1][1] = "ordi"
			marqueur.case11 = "carre_bleu.png"
			places.splice(places.indexOf("place11"), 1)
			break;
		case "place21":
		    marqueur.val21 = "ordi"
			position[1][2] = "ordi"
			marqueur.case21 = "carre_bleu.png"
			places.splice(places.indexOf("place21"), 1)
			break;
		case "place02":
		    marqueur.val02 = "ordi";
			position[2][0] = "ordi"
			marqueur.case02 = "carre_bleu.png";
			places.splice(places.indexOf("place02"), 1)
			break;
		case "place12":
		    marqueur.val12 = "ordi";
			position[2][1] = "ordi"
			marqueur.case12 = "carre_bleu.png";
			places.splice(places.indexOf("place12"), 1)
			break;
		case "place22":
		    marqueur.val = "ordi";
			position[2][2] = "ordi"
			marqueur.case22 = "carre_bleu.png";
			places.splice(places.indexOf("place22"), 1)
			break;
	}
    

	var value = "true";
	for (var idx = 0; idx < position.length ; idx += 1) {
	    for (var index = 0; index < position[idx].length ; index += 1) {
		    if (position[idx][index] === "rien") {
			    value = "false";
			}
		}
	}

    var verif = []

	if (
	    position[0][0] !== "rien" &&
		position[0][0] === position[0][1] &&
		position[0][0] === position[0][2]
	) { verif[verif.length] = "true"
	} else { verif.length = "false"}
	if (
	    position[1][0] !== "rien" &&
	    position[1][0] === position[1][1] &&
		position[1][0] === position[1][2]
	) { verif[verif.length] = "true"
	} else { verif.length = "false"}
	if (
	    position[2][0] !== "rien" &&
	    position[2][0] === position[2][1] &&
		position[2][0] === position[2][2]
	) {verif.length = "true"
	} else { verif.length = "false"}
//les lignes
    if (		
	    position[0][0] !== "rien" &&
	    position[0][0] === position[1][0] &&
		position[0][0] === position[2][0]
	) { verif.length = "true"
	} else } verif.length = "false"
	    position[0][1] !== "rien" &&
	    position[0][1] === position[1][1] &&
		position[0][1] === position[2][1]
		||
	    position[0][2] !== "rien" &&
	    position[0][2] === position[1][2] &&
		position[0][2] === position[2][2]
		//les colones
		||
	    position[0][0] !== "rien" &&
		position[0][0] === position[1][1] &&
		position[0][0] === position[2][2] 
		||
	    position[0][2] !== "rien" &&
		position[0][2] === position[1][1]&&
		position[0][2] === position[2][0]
		//les diagonales
		||
		value === "true"

	) {
	    page = fs.readFileSync("resultat_morpion.html", "UTF-8");
		page = page.supplant(marqueur);


		var origine_marqueur = fs.readFileSync("information_plateau_morpion_origine.json", "UTF-8");
		var origine_places = fs.readFileSync("places_disponible_morpion_origine.json", "UTF-8");
		var origine_position = fs.readFileSync("position_morpion_origine.json", "UTF-8");

		fs.writeFileSync("information_plateau_morpion.json", origine_marqueur, "UTF-8");
		fs.writeFileSync("places_disponible_morpion.json", origine_places, "UTF-8");
		fs.writeFileSync("position_morpion.json", origine_position, "UTF-8");
    } else {

	marqueur.pseudo = query.pseudo
	page = fs.readFileSync("plateau_morpion.html", "UTF-8");
	page = page.supplant(marqueur)

    marqueur = JSON.stringify(marqueur)
	fs.writeFileSync("information_plateau_morpion.json", marqueur, "UTF-8");

	places = JSON.stringify(places)
	fs.writeFileSync("places_disponible_morpion.json", places, "UTF-8");
	
	position = JSON.stringify(position);
	fs.writeFileSync("position_morpion.json", position, "UTF-8");

	}




	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;
