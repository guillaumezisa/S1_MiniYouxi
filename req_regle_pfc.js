// traitement de /req_regle_pfc

"use strict" ;

var fs= require("fs");
require ("remedial")
var page;
var marquer;

var trait = function (req, res, query) {

	//page = fs.readFileSync("

	marqueur = {}
	marqueur.pseudo = query.pseudo
	page = page.supplant(marqueur)

	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.write(page);
	res.end();

}
module.exports = trait;
