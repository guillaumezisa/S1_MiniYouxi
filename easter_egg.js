// traitement de la requete /easter_egg

"use strict";

var trait = function (req, res, query) {
    res.writeHead(200, {"Content-Type": "text/html"});
	res.write("<img src=\"./beautiful-easter-egg.png\">");
	// What a beautyfull easter egg
	res.end();
}
module.exports = trait;
