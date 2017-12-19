// analyser mental


"use strict"

var fs = require ("fs");
require ('remedial') ;


var  trait = function (request, response, query) {


	var page;
	var marqueur = {} ;
	var comparaison;
	var nb_A;
	var nb_B;
	

nb_A = Math.floor(Math.random()*10)+1

nb_B = Math.floor(Math.random()*10)+1

switch (Math.floor(Math.random()*3)+1) {
			case 0:
				nb_A + nb_B ;
				break;
			case 1 :
				nb_A * nb_B ;
				break;
			case 2 :
				nb_A - nb_B;
				break;
			case 3 :
				nb_A / nb_B;
				break;
}


