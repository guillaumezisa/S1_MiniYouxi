// pfc contre l'ordi

"use strict"
var nb;
var choix;
var prop;
var kbd;
var rep;
var utilisateur;
var pc;


choix = ["rocher" , "feuille" ,"ciseaux" ] 
kbd= require("kbd")
console.log("Chifoumi")

utilisateur = 0 
pc = 0

do {
	console.log("rocher feuille ou ciseaux ?")
		rep = kbd.getLineSync();

	nb = Math.floor(Math.random() * 3);
	prop = choix[nb] 

		console.log(prop)

		if (rep===prop) {
			console.log("égaliter")
		} else if (rep==="rocher" && prop === "ciseaux"){
			utilisateur++		
				console.log("utilisateur vainqueur la pierre bat le ciseaux")
		} else if (rep==="ciseaux" && prop === "rocher"){
			pc++
				console.log("le ciseaux perd contre la pierre bien vue ordi")
		} else if (rep==="feuille" && prop === "rocher"){
			utilisateur++
				console.log("la feuille bat le rocher bien jouer utilisateur")
		} else if (rep==="rocher" && prop ==="feuille"){
			pc++
				console.log("la feuille couvre le rocher perdu utilisateur bien vue pc")
		} else if (rep==="ciseaux" && prop ==="feuille"){
			utilisateur ++
				console.log("le ciseaux bat la feuille bat la feuille") 
		} else if (rep==="feuille" && prop ==="ciseaux"){
			pc++
				console.log("perdu utilisateur victoire du pc la feuille perd contre le ciseaux")
		} console.log(" votre score est de ", utilisateur, "et pour l'ordinateur", pc)
	console.log ("Pour finir le jeux faite ctrl+C")
} while (true )

