// traitement de /req_solitaire_afficher

"use strict";

var fs = require("fs");
require("remedial");
var page;
var trait = function (req, res, query) {
	page = fs.readFileSync("solitaire_bouger.html", "UTF-8");
	var marqueur = [];
	var i=0;
	marqueur.pseudo = query.pseudo;
	marqueur = fs.readFileSync("./solitaire_"+query.pseudo+".json","UTF-8");
	marqueur = JSON.parse(marqueur);
	nbp = fs.readFileSync("./solitaire_nbp_"+query.pseudo+".json","UTF-8");
	nbp = JSON.parse(nbp);
		
		//CASE02
		if ( marqueur.case02 === "solitaire_l.png"){
			marqueur.case02 = "solitaire_l.png";
		}else if( marqueur.case02 === "solitaire_p2.png"){
			if ("place22" in query && marqueur.case22 === "solitaire_l.png"){
				marqueur.case02 = "solitaire_l.png";
				marqueur.case12 = "solitaire_l.png";
				marqueur.case22 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place24" in query && marqueur.case24 === "solitaire_l.png"){
				marqueur.case02 = "solitaire_l.png";
				marqueur.case13 = "solitaire_l.png";
				marqueur.case24 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place04" in query && marqueur.case04 === "solitaire_l.png"){
				marqueur.case02 = "solitaire_l.png";
				marqueur.case03 = "solitaire_l.png";
				marqueur.case04 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place02" in query && marqueur.case02 === "solitaire_p2.png"){
				marqueur.case02 = "solitaire_p1.png";
			}
		}
		if ("place02" in query && marqueur.case02 === "solitaire_l.png"){
			marqueur.case02 = "solitaire_l.png";
		}
		//CASE03
		if ( marqueur.case03 === "solitaire_l.png"){
			marqueur.case03 = "solitaire_l.png";
		}else if( marqueur.case03 === "solitaire_p2.png"){
			if ("place23" in query && marqueur.case23 === "solitaire_l.png"){
				marqueur.case03 = "solitaire_l.png";
				marqueur.case13 = "solitaire_l.png";
				marqueur.case23 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place21" in query && marqueur.case21 === "solitaire_l.png"){
				marqueur.case03 = "solitaire_l.png";
				marqueur.case12 = "solitaire_l.png";
				marqueur.case21 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place25" in query && marqueur.case25 === "solitaire_l.png"){
				marqueur.case03 = "solitaire_l.png";
				marqueur.case14 = "solitaire_l.png";
				marqueur.case25 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place03" in query && marqueur.case03 === "solitaire_p2.png"){
				marqueur.case03 = "solitaire_p1.png";
			}//PROBLEME
		}
		//CASE04
		if ( marqueur.case04 === "solitaire_l.png"){
			marqueur.case04 = "solitaire_l.png";
		}else if( marqueur.case04 === "solitaire_p2.png"){
			if ("place24" in query && marqueur.case24 === "solitaire_l.png"){
				marqueur.case04 = "solitaire_l.png";
				marqueur.case14 = "solitaire_l.png";
				marqueur.case24 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place02" in query && marqueur.case02 === "solitaire_l.png"){
				marqueur.case04 = "solitaire_l.png";
				marqueur.case03 = "solitaire_l.png";
				marqueur.case02 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place22" in query && marqueur.case22 === "solitaire_l.png"){
				marqueur.case04 = "solitaire_l.png";
				marqueur.case13 = "solitaire_l.png";
				marqueur.case22 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place04" in query && marqueur.case04 === "solitaire_p2.png"){
				marqueur.case04 = "solitaire_p1.png";
			}
		}
		//CASE12
		if ( marqueur.case12 === "solitaire_l.png"){
			marqueur.case12 = "solitaire_l.png";
		}else if ( marqueur.case12 === "solitaire_p2.png"){
			if ("place14" in query && marqueur.case14 === "solitaire_l.png"){
				marqueur.case12 = "solitaire_l.png";
				marqueur.case13 = "solitaire_l.png";
				marqueur.case14 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place34" in query && marqueur.case34 === "solitaire_l.png"){
				marqueur.case12 = "solitaire_l.png";
				marqueur.case23 = "solitaire_l.png";
				marqueur.case34 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place32" in query && marqueur.case32 === "solitaire_l.png"){
				marqueur.case12 = "solitaire_l.png";
				marqueur.case22 = "solitaire_l.png";
				marqueur.case32 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place30" in query && marqueur.case30 === "solitaire_l.png"){
				marqueur.case12 = "solitaire_l.png";
				marqueur.case21 = "solitaire_l.png";
				marqueur.case30 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place12" in query && marqueur.case12 === "solitaire_p2.png"){
				marqueur.case12 = "solitaire_p1.png";
			}
		}
		//CASE13
		if ( marqueur.case13 === "solitaire_l.png"){
			marqueur.case13 = "solitaire_l.png";
		}else if ( marqueur.case13 === "solitaire_p2.png"){
			if ("place33" in query && marqueur.case33 === "solitaire_l.png"){
				marqueur.case23 = "solitaire_l.png";
				marqueur.case13 = "solitaire_l.png";
				marqueur.case33 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place31" in query && marqueur.case31 === "solitaire_l.png"){
				marqueur.case13 = "solitaire_l.png";
				marqueur.case22 = "solitaire_l.png";
				marqueur.case31 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place35" in query && marqueur.case35 === "solitaire_l.png"){
				marqueur.case13 = "solitaire_l.png";
				marqueur.case24 = "solitaire_l.png";
				marqueur.case35 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place13" in query && marqueur.case13 === "solitaire_p2.png"){
				marqueur.case13 = "solitaire_p1.png";
			}
		}
		//CASE14
		if ( marqueur.case14 === "solitaire_l.png"){
			marqueur.case14 = "solitaire_l.png";
		}else if( marqueur.case14 === "solitaire_p2.png"){
			if("place34" in query && marqueur.case34 === "solitaire_l.png"){
				marqueur.case14 = "solitaire_l.png";
				marqueur.case24 = "solitaire_l.png";
				marqueur.case34 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place36" in query && marqueur.case36 === "solitaire_l.png"){
				marqueur.case14 = "solitaire_l.png";
				marqueur.case25 = "solitaire_l.png";
				marqueur.case36 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place32" in query && marqueur.case32 === "solitaire_l.png"){
				marqueur.case14 = "solitaire_l.png";
				marqueur.case23 = "solitaire_l.png";
				marqueur.case32 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place12" in query && marqueur.case12 === "solitaire_l.png"){
				marqueur.case14 = "solitaire_l.png";
				marqueur.case13 = "solitaire_l.png";
				marqueur.case12 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place14" in query && marqueur.case14 === "solitaire_p2.png"){
				marqueur.case14 = "solitaire_p1.png";
			}
		}
		//CASE20
		if ( marqueur.case20 === "solitaire_l.png"){
			marqueur.case20 = "solitaire_l.png";
		}else if ( marqueur.case20 === "solitaire_p2.png"){
			if ("place22" in query && marqueur.case22 === "solitaire_l.png"){
				marqueur.case20 = "solitaire_l.png";
				marqueur.case21 = "solitaire_l.png";
				marqueur.case22 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place31" in query && marqueur.case31 === "solitaire_l.png"){
				marqueur.case20 = "solitaire_l.png";
				marqueur.case31 = "solitaire_l.png";
				marqueur.case42 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place35" in query && marqueur.case35 === "solitaire_l.png"){
				marqueur.case20 = "solitaire_l.png";
				marqueur.case30 = "solitaire_l.png";
				marqueur.case40 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place20" in query && marqueur.case20 === "solitaire_p2.png"){
				marqueur.case20 = "solitaire_p1.png";
			}
		}
		//CASE21
		if ( marqueur.case21 === "solitaire_l.png"){
			marqueur.case21 = "solitaire_l.png";
		}else if ( marqueur.case21 === "solitaire_p2.png"){
			if ("place41" in query && marqueur.case41 === "solitaire_l.png"){
				marqueur.case21 = "solitaire_l.png";
				marqueur.case31 = "solitaire_l.png";
				marqueur.case41 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place43" in query && marqueur.case43 === "solitaire_l.png"){
				marqueur.case21 = "solitaire_l.png";
				marqueur.case32 = "solitaire_l.png";
				marqueur.case43 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place23" in query && marqueur.case23 === "solitaire_l.png"){
				marqueur.case21 = "solitaire_l.png";
				marqueur.case22 = "solitaire_l.png";
				marqueur.case23 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place21" in query && marqueur.case21 === "solitaire_p2.png"){
				marqueur.case21 = "solitaire_p1.png";
			}
		}
		//CASE22	
		if ( marqueur.case22 === "solitaire_l.png"){
			marqueur.case22 = "solitaire_l.png";
		}else if ( marqueur.case22 === "solitaire_p2.png"){
			if ("place20" in query && marqueur.case20 === "solitaire_l.png"){
				marqueur.case22 = "solitaire_l.png";
				marqueur.case21 = "solitaire_l.png";
				marqueur.case20 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place40" in query && marqueur.case40 === "solitaire_l.png"){
				marqueur.case22 = "solitaire_l.png";
				marqueur.case31 = "solitaire_l.png";
				marqueur.case40 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place42" in query && marqueur.case42 === "solitaire_l.png"){
				marqueur.case22 = "solitaire_l.png";
				marqueur.case32 = "solitaire_l.png";
				marqueur.case42 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place44" in query && marqueur.case44 === "solitaire_l.png"){
				marqueur.case22 = "solitaire_l.png";
				marqueur.case33 = "solitaire_l.png";
				marqueur.case44 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place24" in query && marqueur.case24 === "solitaire_l.png"){
				marqueur.case22 = "solitaire_l.png";
				marqueur.case23 = "solitaire_l.png";
				marqueur.case24 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place04" in query && marqueur.case04 === "solitaire_l.png"){
				marqueur.case22 = "solitaire_l.png";
				marqueur.case13 = "solitaire_l.png";
				marqueur.case04 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place02" in query && marqueur.case02 === "solitaire_l.png"){
				marqueur.case22 = "solitaire_l.png";
				marqueur.case12 = "solitaire_l.png";
				marqueur.case02 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place22" in query && marqueur.case22 === "solitaire_p2.png"){
				marqueur.case22 = "solitaire_p1.png";
			}
		}
		//CASE23
		if ( marqueur.case23 === "solitaire_l.png"){
			marqueur.case23 = "solitaire_l.png";
		}else if ( marqueur.case23 === "solitaire_p2.png"){
			if ("place21" in query && marqueur.case21 === "solitaire_l.png"){
				marqueur.case23 = "solitaire_l.png";
				marqueur.case22 = "solitaire_l.png";
				marqueur.case21 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place41" in query && marqueur.case41 === "solitaire_l.png"){
				marqueur.case23 = "solitaire_l.png";
				marqueur.case32 = "solitaire_l.png";
				marqueur.case41 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place43" in query && marqueur.case43 === "solitaire_l.png"){
				marqueur.case23 = "solitaire_l.png";
				marqueur.case33 = "solitaire_l.png";
				marqueur.case43 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place45" in query && marqueur.case45 === "solitaire_l.png"){
				marqueur.case23 = "solitaire_l.png";
				marqueur.case34 = "solitaire_l.png";
				marqueur.case45 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place25" in query && marqueur.case25 === "solitaire_l.png"){
				marqueur.case23 = "solitaire_l.png";
				marqueur.case24 = "solitaire_l.png";
				marqueur.case25 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place03" in query && marqueur.case03 === "solitaire_l.png"){
				marqueur.case23 = "solitaire_l.png";
				marqueur.case13 = "solitaire_l.png";
				marqueur.case03 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place23" in query && marqueur.case23 === "solitaire_p2.png"){
				marqueur.case23 = "solitaire_p1.png";
			}
		}
		//CASE24
		if ( marqueur.case24 === "solitaire_l.png"){
			marqueur.case24 = "solitaire_l.png";
		}else if( marqueur.case24 === "solitaire_p2.png"){
			if ("place22" in query && marqueur.case22 === "solitaire_l.png"){
				marqueur.case24 = "solitaire_l.png";
				marqueur.case23 = "solitaire_l.png";
				marqueur.case22 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place42" in query && marqueur.case42 === "solitaire_l.png"){
				marqueur.case24 = "solitaire_l.png";
				marqueur.case33 = "solitaire_l.png";
				marqueur.case42 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place44" in query && marqueur.case44 === "solitaire_l.png"){
				marqueur.case24 = "solitaire_l.png";
				marqueur.case34 = "solitaire_l.png";
				marqueur.case44 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place46" in query && marqueur.case46 === "solitaire_l.png"){
				marqueur.case24 = "solitaire_l.png";
				marqueur.case35 = "solitaire_l.png";
				marqueur.case46 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place26" in query && marqueur.case26 === "solitaire_l.png"){
				marqueur.case24 = "solitaire_l.png";
				marqueur.case25 = "solitaire_l.png";
				marqueur.case26 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place04" in query && marqueur.case04 === "solitaire_l.png"){
				marqueur.case24 = "solitaire_l.png";
				marqueur.case14 = "solitaire_l.png";
				marqueur.case04 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place02" in query && marqueur.case02 === "solitaire_l.png"){
				marqueur.case24 = "solitaire_l.png";
				marqueur.case13 = "solitaire_l.png";
				marqueur.case02 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place24" in query && marqueur.case24 === "solitaire_p2.png"){
				marqueur.case24 = "solitaire_p1.png";
			}
		}
		//CASE25
		if ( marqueur.case25 === "solitaire_l.png"){
			marqueur.case25 = "solitaire_l.png";
		}else if ( marqueur.case25 === "solitaire_p2.png"){
			if ("place23" in query && marqueur.case23 === "solitaire_l.png"){
				marqueur.case25 = "solitaire_l.png";
				marqueur.case24 = "solitaire_l.png";
				marqueur.case23 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place43" in query && marqueur.case43 === "solitaire_l.png"){
				marqueur.case25 = "solitaire_l.png";
				marqueur.case34 = "solitaire_l.png";
				marqueur.case43 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place45" in query && marqueur.case45 === "solitaire_l.png"){
				marqueur.case25 = "solitaire_l.png";
				marqueur.case35 = "solitaire_l.png";
				marqueur.case45 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place25" in query && marqueur.case25 === "solitaire_p2.png"){
				marqueur.case25 = "solitaire_p1.png";
			}
		}
		//CASE26
		if ( marqueur.case26 === "solitaire_l.png"){
			marqueur.case26 = "solitaire_l.png";
		}else if ( marqueur.case26 === "solitaire_p2.png"){
			if ("place24" in query && marqueur.case24 === "solitaire_l.png"){
				marqueur.case26 = "solitaire_l.png";
				marqueur.case25 = "solitaire_l.png";
				marqueur.case24 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place44" in query && marqueur.case44 === "solitaire_l.png"){
				marqueur.case26 = "solitaire_l.png";
				marqueur.case35 = "solitaire_l.png";
				marqueur.case44 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place46" in query && marqueur.case46 === "solitaire_l.png"){
				marqueur.case26 = "solitaire_l.png";
				marqueur.case36 = "solitaire_l.png";
				marqueur.case46 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place26" in query && marqueur.case26 === "solitaire_p2.png"){
				marqueur.case26 = "solitaire_p1.png";
			}
		}
		//CASE30
		if ( marqueur.case30 === "solitaire_l.png"){
			marqueur.case30 = "solitaire_l.png";
		}else if ( marqueur.case30 === "solitaire_p2.png"){
			if ("place52" in query && marqueur.case52 === "solitaire_l.png"){
				marqueur.case30 = "solitaire_l.png";
				marqueur.case41 = "solitaire_l.png";
				marqueur.case52 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place32" in query && marqueur.case32 === "solitaire_l.png"){
				marqueur.case30 = "solitaire_l.png";
				marqueur.case31 = "solitaire_l.png";
				marqueur.case32 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place12" in query && marqueur.case12 === "solitaire_l.png"){
				marqueur.case30 = "solitaire_l.png";
				marqueur.case21 = "solitaire_l.png";
				marqueur.case12 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place30" in query && marqueur.case30 === "solitaire_p2.png"){
				marqueur.case30 = "solitaire_p1.png";
			}
		}
		//CASE31
		if ( marqueur.case31 === "solitaire_l.png"){
			marqueur.case31 = "solitaire_l.png";
		}else if ( marqueur.case31 === "solitaire_p2.png"){
			if ("place13" in query && marqueur.case13 === "solitaire_l.png"){
				marqueur.case31 = "solitaire_l.png";
				marqueur.case22 = "solitaire_l.png";
				marqueur.case13 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place33" in query && marqueur.case33 === "solitaire_l.png"){
				marqueur.case31 = "solitaire_l.png";
				marqueur.case32 = "solitaire_l.png";
				marqueur.case33 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place13" in query && marqueur.case13 === "solitaire_l.png"){
				marqueur.case31 = "solitaire_l.png";
				marqueur.case22 = "solitaire_l.png";
				marqueur.case13 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place31" in query && marqueur.case31 === "solitaire_p2.png"){
				marqueur.case31 = "solitaire_p1.png";
			}
		}
		//CASE32
		if ( marqueur.case32 === "solitaire_l.png"){
			marqueur.case32 = "solitaire_l.png";
		}else if ( marqueur.case32 === "solitaire_p2.png"){
			if ("place30" in query && marqueur.case30 === "solitaire_l.png"){
				marqueur.case32 = "solitaire_l.png";
				marqueur.case31 = "solitaire_l.png";
				marqueur.case30 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place52" in query && marqueur.case52 === "solitaire_l.png"){
				marqueur.case32 = "solitaire_l.png";
				marqueur.case41 = "solitaire_l.png";
				marqueur.case52 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place54" in query && marqueur.case54 === "solitaire_l.png"){
				marqueur.case32 = "solitaire_l.png";
				marqueur.case43 = "solitaire_l.png";
				marqueur.case54 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place34" in query && marqueur.case34 === "solitaire_l.png"){
				marqueur.case32 = "solitaire_l.png";
				marqueur.case33 = "solitaire_l.png";
				marqueur.case34 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place14" in query && marqueur.case14 === "solitaire_l.png"){
				marqueur.case32 = "solitaire_l.png";
				marqueur.case23 = "solitaire_l.png";
				marqueur.case14 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place12" in query && marqueur.case12 === "solitaire_l.png"){
				marqueur.case32 = "solitaire_l.png";
				marqueur.case22 = "solitaire_l.png";
				marqueur.case12 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place32" in query && marqueur.case32 === "solitaire_p2.png"){
				marqueur.case32 = "solitaire_p1.png";
			}
		}
		//CASE33
		if ( marqueur.case33 === "solitaire_l.png"){
			marqueur.case33 = "solitaire_l.png";
		}else if ( marqueur.case33 === "solitaire_p2.png"){
			if ("place31" in query && marqueur.case31 === "solitaire_l.png"){
				marqueur.case33 = "solitaire_l.png";
				marqueur.case32 = "solitaire_l.png";
				marqueur.case31 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place53" in query && marqueur.case53 === "solitaire_l.png"){
				marqueur.case33 = "solitaire_l.png";
				marqueur.case43 = "solitaire_l.png";
				marqueur.case53 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place35" in query && marqueur.case35 === "solitaire_l.png"){
				marqueur.case33 = "solitaire_l.png";
				marqueur.case34 = "solitaire_l.png";
				marqueur.case35 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place13" in query && marqueur.case35 === "solitaire_l.png"){
				marqueur.case33 = "solitaire_l.png";
				marqueur.case23 = "solitaire_l.png";
				marqueur.case13 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place33" in query && marqueur.case33 === "solitaire_p2.png"){
				marqueur.case33 = "solitaire_p1.png";
			}
		}
		//CASE34   
		if ( marqueur.case34 === "solitaire_l.png"){
			marqueur.case34 = "solitaire_l.png";
		}else if ( marqueur.case34 === "solitaire_p2.png"){
			if ("place32" in query && marqueur.case32 === "solitaire_l.png"){
				marqueur.case34 = "solitaire_l.png";
				marqueur.case33 = "solitaire_l.png";
				marqueur.case32 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place52" in query && marqueur.case52 === "solitaire_l.png"){
				marqueur.case34 = "solitaire_l.png";
				marqueur.case43 = "solitaire_l.png";
				marqueur.case52 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place54" in query && marqueur.case54 === "solitaire_l.png"){
				marqueur.case34 = "solitaire_l.png";
				marqueur.case44 = "solitaire_l.png";
				marqueur.case54 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place36" in query && marqueur.case36 === "solitaire_l.png"){
				marqueur.case34 = "solitaire_l.png";
				marqueur.case35 = "solitaire_l.png";
				marqueur.case36 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place14" in query && marqueur.case14 === "solitaire_l.png"){
				marqueur.case34 = "solitaire_l.png";
				marqueur.case24 = "solitaire_l.png";
				marqueur.case14 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place12" in query && marqueur.case12 === "solitaire_l.png"){
				marqueur.case34 = "solitaire_l.png";
				marqueur.case23 = "solitaire_l.png";
				marqueur.case12 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place34" in query && marqueur.case34 === "solitaire_p2.png"){
				marqueur.case34 = "solitaire_p1.png";
			}
		}
		//CASE35
		if ( marqueur.case35 === "solitaire_l.png"){
			marqueur.case35 = "solitaire_l.png";
		}else if ( marqueur.case35 === "solitaire_p2.png"){
			if ("place33" in query && marqueur.case33 === "solitaire_l.png"){
				marqueur.case35 = "solitaire_l.png";
				marqueur.case34 = "solitaire_l.png";
				marqueur.case33 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place53" in query && marqueur.case53 === "solitaire_l.png"){
				marqueur.case35 = "solitaire_l.png";
				marqueur.case44 = "solitaire_l.png";
				marqueur.case53 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place13" in query && marqueur.case13 === "solitaire_l.png"){
				marqueur.case35 = "solitaire_l.png";
				marqueur.case24 = "solitaire_l.png";
				marqueur.case13 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place35" in query && marqueur.case35 === "solitaire_p2.png"){
				marqueur.case35 = "solitaire_p1.png";
			}
		}
		//CASE36
		if ( marqueur.case36 === "solitaire_l.png"){
			marqueur.case36 = "solitaire_l.png";
		}else if ( marqueur.case36 === "solitaire_p2.png"){
			if ("place34" in query && marqueur.case34 === "solitaire_l.png"){
				marqueur.case36 = "solitaire_l.png";
				marqueur.case35 = "solitaire_l.png";
				marqueur.case34 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place54" in query && marqueur.case54 === "solitaire_l.png"){
				marqueur.case36 = "solitaire_l.png";
				marqueur.case45 = "solitaire_l.png";
				marqueur.case54 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place14" in query && marqueur.case14 === "solitaire_l.png"){
				marqueur.case36 = "solitaire_l.png";
				marqueur.case25 = "solitaire_l.png";
				marqueur.case14 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place36" in query && marqueur.case36 === "solitaire_p2.png"){
				marqueur.case36 = "solitaire_p1.png";
			}
		}
		//CASE40
		if ( marqueur.case40 === "solitaire_l.png"){
			marqueur.case40 = "solitaire_l.png";
		}else if ( marqueur.case40 === "solitaire_p2.png"){
			if ("place20" in query && marqueur.case20 === "solitaire_l.png"){
				marqueur.case40 = "solitaire_l.png";
				marqueur.case30 = "solitaire_l.png";
				marqueur.case20 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place22" in query && marqueur.case22 === "solitaire_l.png"){
				marqueur.case40 = "solitaire_l.png";
				marqueur.case31 = "solitaire_l.png";
				marqueur.case22 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place42" in query && marqueur.case42 === "solitaire_l.png"){
				marqueur.case40 = "solitaire_l.png";
				marqueur.case41 = "solitaire_l.png";
				marqueur.case42 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place40" in query && marqueur.case40 === "solitaire_p2.png"){
				marqueur.case40 = "solitaire_p1.png";
			}
		}
		//CASE41
		if ( marqueur.case41 === "solitaire_l.png"){
			marqueur.case41 = "solitaire_l.png";
		}else if ( marqueur.case41 === "solitaire_p2.png"){
			if ("place23" in query && marqueur.case23 === "solitaire_l.png"){
				marqueur.case41 = "solitaire_l.png";
				marqueur.case32 = "solitaire_l.png";
				marqueur.case23 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place21" in query && marqueur.case21 === "solitaire_l.png"){
				marqueur.case41 = "solitaire_l.png";
				marqueur.case31 = "solitaire_l.png";
				marqueur.case21 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place43" in query && marqueur.case43 === "solitaire_l.png"){
				marqueur.case41 = "solitaire_l.png";
				marqueur.case42 = "solitaire_l.png";
				marqueur.case43 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place41" in query && marqueur.case41 === "solitaire_p2.png"){
				marqueur.case41 = "solitaire_p1.png";
			}
		}
		//CASE42
		if ( marqueur.case42 === "solitaire_l.png"){
			marqueur.case42 = "solitaire_l.png";
		}else if ( marqueur.case42 === "solitaire_p2.png"){
			if ("place40" in query && marqueur.case40 === "solitaire_l.png"){
				marqueur.case42 = "solitaire_l.png";
				marqueur.case41 = "solitaire_l.png";
				marqueur.case40 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place62" in query && marqueur.case62 === "solitaire_l.png"){
				marqueur.case42 = "solitaire_l.png";
				marqueur.case52 = "solitaire_l.png";
				marqueur.case62 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place44" in query && marqueur.case44 === "solitaire_l.png"){
				marqueur.case42 = "solitaire_l.png";
				marqueur.case43 = "solitaire_l.png";
				marqueur.case44 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place24" in query && marqueur.case24 === "solitaire_l.png"){
				marqueur.case42 = "solitaire_l.png";
				marqueur.case33 = "solitaire_l.png";
				marqueur.case24 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place22" in query && marqueur.case22 === "solitaire_l.png"){
				marqueur.case42 = "solitaire_l.png";
				marqueur.case32 = "solitaire_l.png";
				marqueur.case22 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place20" in query && marqueur.case20 === "solitaire_l.png"){
				marqueur.case42 = "solitaire_l.png";
				marqueur.case31 = "solitaire_l.png";
				marqueur.case20 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place42" in query && marqueur.case42 === "solitaire_p2.png"){
				marqueur.case42 = "solitaire_p1.png";
			}
		}
		//CASE43
		if ( marqueur.case43 === "solitaire_l.png"){
			marqueur.case43 = "solitaire_l.png";
		}else if ( marqueur.case43 === "solitaire_p2.png"){
			if ("place41" in query && marqueur.case41 === "solitaire_l.png"){
				marqueur.case43 = "solitaire_l.png";
				marqueur.case42 = "solitaire_l.png";
				marqueur.case41 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place63" in query && marqueur.case63 === "solitaire_l.png"){
				marqueur.case43 = "solitaire_l.png";
				marqueur.case53 = "solitaire_l.png";
				marqueur.case63 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place45" in query && marqueur.case45 === "solitaire_l.png"){
				marqueur.case43 = "solitaire_l.png";
				marqueur.case44 = "solitaire_l.png";
				marqueur.case45 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place25" in query && marqueur.case25 === "solitaire_l.png"){
				marqueur.case43 = "solitaire_l.png";
				marqueur.case34 = "solitaire_l.png";
				marqueur.case25 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place23" in query && marqueur.case23 === "solitaire_l.png"){
				marqueur.case43 = "solitaire_l.png";
				marqueur.case33 = "solitaire_l.png";
				marqueur.case23 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place21" in query && marqueur.case21 === "solitaire_l.png"){
				marqueur.case43 = "solitaire_l.png";
				marqueur.case32 = "solitaire_l.png";
				marqueur.case21 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place43" in query && marqueur.case43 === "solitaire_p2.png"){
				marqueur.case43 = "solitaire_p1.png";
			}
		}
		//CASE44
		if ( marqueur.case44 === "solitaire_l.png"){
			marqueur.case44 = "solitaire_l.png";
		}else if ( marqueur.case44 === "solitaire_p2.png"){
			if ("place42" in query && marqueur.case42 === "solitaire_l.png"){
				marqueur.case44 = "solitaire_l.png";
				marqueur.case43 = "solitaire_l.png";
				marqueur.case42 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place62" in query && marqueur.case62 === "solitaire_l.png"){
				marqueur.case44 = "solitaire_l.png";
				marqueur.case53 = "solitaire_l.png";
				marqueur.case62 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place64" in query && marqueur.case64 === "solitaire_l.png"){
				marqueur.case44 = "solitaire_l.png";
				marqueur.case54 = "solitaire_l.png";
				marqueur.case64 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place46" in query && marqueur.case46 === "solitaire_l.png"){
				marqueur.case44 = "solitaire_l.png";
				marqueur.case45 = "solitaire_l.png";
				marqueur.case46 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place26" in query && marqueur.case26 === "solitaire_l.png"){
				marqueur.case44 = "solitaire_l.png";
				marqueur.case35 = "solitaire_l.png";
				marqueur.case26 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place24" in query && marqueur.case24 === "solitaire_l.png"){
				marqueur.case44 = "solitaire_l.png";
				marqueur.case34 = "solitaire_l.png";
				marqueur.case24 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place22" in query && marqueur.case22 === "solitaire_l.png"){
				marqueur.case44 = "solitaire_l.png";
				marqueur.case33 = "solitaire_l.png";
				marqueur.case22 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place21" in query && marqueur.case21 === "solitaire_l.png"){
				marqueur.case44 = "solitaire_l.png";
				marqueur.case33 = "solitaire_l.png";
				marqueur.case22 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place44" in query && marqueur.case44 === "solitaire_p2.png"){
				marqueur.case44 = "solitaire_p1.png";
			}
		}
		//CASE45
		if ( marqueur.case45 === "solitaire_l.png"){
			marqueur.case45 = "solitaire_l.png";
		}else if ( marqueur.case45 === "solitaire_p2.png"){
			if ("place43" in query && marqueur.case43 === "solitaire_l.png"){
				marqueur.case45 = "solitaire_l.png";
				marqueur.case44 = "solitaire_l.png";
				marqueur.case43 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place23" in query && marqueur.case23 === "solitaire_l.png"){
				marqueur.case45 = "solitaire_l.png";
				marqueur.case34 = "solitaire_l.png";
				marqueur.case23 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place25" in query && marqueur.case25 === "solitaire_l.png"){
				marqueur.case45 = "solitaire_l.png";
				marqueur.case35 = "solitaire_l.png";
				marqueur.case25 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place45" in query && marqueur.case45 === "solitaire_p2.png"){
				marqueur.case45 = "solitaire_p1.png";
			}
		}
		//CASE46
		if ( marqueur.case46 === "solitaire_l.png"){
			marqueur.case46 = "solitaire_l.png";
		}else if ( marqueur.case46 === "solitaire_p2.png"){
			if ("place44" in query && marqueur.case44 === "solitaire_l.png"){
				marqueur.case46 = "solitaire_l.png";
				marqueur.case45 = "solitaire_l.png";
				marqueur.case44 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place24" in query && marqueur.case24 === "solitaire_l.png"){
				marqueur.case46 = "solitaire_l.png";
				marqueur.case35 = "solitaire_l.png";
				marqueur.case24 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place26" in query && marqueur.case26 === "solitaire_l.png"){
				marqueur.case46 = "solitaire_l.png";
				marqueur.case36 = "solitaire_l.png";
				marqueur.case26 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place46" in query && marqueur.case46 === "solitaire_p2.png"){
				marqueur.case46 = "solitaire_p1.png";
			}
		}
		//CASE52
		if ( marqueur.case52 === "solitaire_l.png"){
			marqueur.case52 = "solitaire_l.png";
		}else if ( marqueur.case52 === "solitaire_p2.png"){
			if ("place54" in query && marqueur.case54 === "solitaire_l.png"){
				marqueur.case52 = "solitaire_l.png";
				marqueur.case53 = "solitaire_l.png";
				marqueur.case54 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place32" in query && marqueur.case32 === "solitaire_l.png"){
				marqueur.case52 = "solitaire_l.png";
				marqueur.case42 = "solitaire_l.png";
				marqueur.case32 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place34" in query && marqueur.case34 === "solitaire_l.png"){
				marqueur.case52 = "solitaire_l.png";
				marqueur.case43 = "solitaire_l.png";
				marqueur.case34 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place52" in query && marqueur.case52 === "solitaire_p2.png"){
				marqueur.case52 = "solitaire_p1.png";
			}
		}
		//CASE53
		if ( marqueur.case53 === "solitaire_l.png"){
			marqueur.case53 = "solitaire_l.png";
		}else if ( marqueur.case53 === "solitaire_p2.png"){
			if ("place33" in query && marqueur.case33 === "solitaire_l.png"){
				marqueur.case53 = "solitaire_l.png";
				marqueur.case43 = "solitaire_l.png";
				marqueur.case33 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place35" in query && marqueur.case35 === "solitaire_l.png"){
				marqueur.case53 = "solitaire_l.png";
				marqueur.case44 = "solitaire_l.png";
				marqueur.case35 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place31" in query && marqueur.case31 === "solitaire_l.png"){
				marqueur.case53 = "solitaire_l.png";
				marqueur.case42 = "solitaire_l.png";
				marqueur.case31 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place53" in query && marqueur.case53 === "solitaire_p2.png"){
				marqueur.case53 = "solitaire_p1.png";
			}
		}
		//CASE54
		if ( marqueur.case54 === "solitaire_l.png"){
			marqueur.case54 = "solitaire_l.png";
		}else if ( marqueur.case54 === "solitaire_p2.png"){
			if ("place52" in query && marqueur.case52 === "solitaire_l.png"){
				marqueur.case54 = "solitaire_l.png";
				marqueur.case53 = "solitaire_l.png";
				marqueur.case52 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place32" in query && marqueur.case32 === "solitaire_l.png"){
				marqueur.case54 = "solitaire_l.png";
				marqueur.case43 = "solitaire_l.png";
				marqueur.case32 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place34" in query && marqueur.case34 === "solitaire_l.png"){
				marqueur.case54 = "solitaire_l.png";
				marqueur.case44 = "solitaire_l.png";
				marqueur.case34 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place54" in query && marqueur.case54 === "solitaire_p2.png"){
				marqueur.case54 = "solitaire_p1.png";
			}
		}
		//CASE62
		if ( marqueur.case62 === "solitaire_l.png"){
			marqueur.case62 = "solitaire_l.png";
		}else if ( marqueur.case62 === "solitaire_p2.png"){
			if ("place42" in query && marqueur.case42 === "solitaire_l.png"){
				marqueur.case62 = "solitaire_l.png";
				marqueur.case52 = "solitaire_l.png";
				marqueur.case42 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place44" in query && marqueur.case44 === "solitaire_l.png"){
				marqueur.case62 = "solitaire_l.png";
				marqueur.case53 = "solitaire_l.png";
				marqueur.case44 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place64" in query && marqueur.case64 === "solitaire_l.png"){
				marqueur.case62 = "solitaire_l.png";
				marqueur.case63 = "solitaire_l.png";
				marqueur.case64 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place62" in query && marqueur.case62 === "solitaire_p2.png"){
				marqueur.case62 = "solitaire_p1.png";
			}
		}
		//CASE63
		if ( marqueur.case63 === "solitaire_l.png"){
			marqueur.case63 = "solitaire_l.png";
		}else if ( marqueur.case63 === "solitaire_p2.png"){
			if ("place41" in query && marqueur.case41 === "solitaire_l.png"){
				marqueur.case63 = "solitaire_l.png";
				marqueur.case52 = "solitaire_l.png";
				marqueur.case41 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place43" in query && marqueur.case43 === "solitaire_l.png"){
				marqueur.case63 = "solitaire_l.png";
				marqueur.case53 = "solitaire_l.png";
				marqueur.case43 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if ("place45" in query && marqueur.case45 === "solitaire_l.png"){
				marqueur.case63 = "solitaire_l.png";
				marqueur.case54 = "solitaire_l.png";
				marqueur.case45 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place63" in query && marqueur.case63 === "solitaire_p2.png"){
				marqueur.case63 = "solitaire_p1.png";
			}
		}
		//CASE64
		if ( marqueur.case64 === "solitaire_l.png"){
			marqueur.case64 = "solitaire_l.png";
		}else if ( marqueur.case64 === "solitaire_p2.png"){
			if("place62" in query && marqueur.case62 === "solitaire_l.png"){
				marqueur.case64 = "solitaire_l.png";
				marqueur.case63 = "solitaire_l.png";
				marqueur.case62 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place42" in query && marqueur.case42 === "solitaire_l.png"){
				marqueur.case64 = "solitaire_l.png";
				marqueur.case53 = "solitaire_l.png";
				marqueur.case42 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place44" in query && marqueur.case44 === "solitaire_l.png"){
				marqueur.case64 = "solitaire_l.png";
				marqueur.case54 = "solitaire_l.png";
				marqueur.case44 = "solitaire_p1.png";
				nbp.score = nbp.score-1;
			}
			if("place64" in query && marqueur.case64 === "solitaire_p2.png"){
				marqueur.case64 = "solitaire_p1.png";
			}
		}
	page = page.supplant(marqueur);
	
	var nbp = JSON.stringify(nbp);
	nbp = fs.writeFileSync("solitaire_nbp_"+query.pseudo+".json",nbp,"utf-8");
	marqueur = JSON.stringify(marqueur);
	marqueur = fs.writeFileSync("solitaire_"+query.pseudo+".json",marqueur,"utf-8");

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end(); 
}

module.exports = trait;