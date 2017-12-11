//analyser le pfc 

"use strict"

var fs = require ("fs"); 
require ('remedial') ; 

var trait = function (request, response, query) {

	var page;
	var choix;
	var marqueurs = {} ; 
	var comparaison;

