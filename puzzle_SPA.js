"use strict";

var i;
var puzzle = {};
puzzle.P3 = ["puzzle30","puzzle31","puzzle32"];
puzzle.P4 = ["puzzle40","puzzle41","puzzle42","puzzle43"];
puzzle.P5 = ["puzzle50","puzzle51","puzzle52","puzzle53","puzzle54"];

var rejouer = function() {

	var body = document.querySelector("body");
	var form = body.querySelector("form");
	var br = document.createElement("br");
	var br1 = document.createElement("br");
	var p = document.createElement("p");

	body.innerHTML = "";

	body.appendChild(p);
	body.insertBefore(br, p);
	body.insertBefore(br1, br);
	body.insertBefore(form, br1);
	
	mon_script();
}

var victoire = function() {

	var body = document.querySelector("body");
	var center = body.querySelector("center");
	var div = center.querySelector("div");
	var img = div.querySelector("img");
	var lul = img.getAttribute("src");
	var br = document.createElement("br");
	var button;

	lul = lul.substring(0,8);

	div.innerHTML = ""

	img = document.createElement("img");
	img.setAttribute("src", lul + ".jpg");

	button = document.createElement("button");
	button.setAttribute("class", "button2");
	button.setAttribute("name", "lol");
	button.setAttribute("value", "rejouer");
	button.innerHTML = "Rejouer";

	button.addEventListener("click", rejouer);

	div.appendChild(button);
	div.insertBefore(img, button);
	div.insertBefore(br, button);

}

var vider = function() {

	var body;
	var center;
	var div;
	var image;

	body = document.querySelector("body");
	center = body.querySelector("center");
	div = center.querySelector("div");
	image = div.querySelectorAll("img");

	for(i = 0; i < image.length; i++) {

		if(image[i].getAttribute("data-statut") !== "unselected") {

			image[i].setAttribute("data-statut", "unselected");

		}

	}

}

var verif_victoire = function() {

	var body;
	var center;
	var div;
	var image;
	var vrai;

	body = document.querySelector("body");
	center = body.querySelector("center");
	div = center.querySelector("div");
	image = div.querySelectorAll("img");

	i = 1;

	do {

		if(Number(image[i - 1].getAttribute("data-order")) < Number(image[i].getAttribute("data-order"))) {

			vrai = true;

		} else {

			vrai = false;

		}

		i++;
	
	} while(vrai === true && i < image.length);

	if(vrai === true && i === image.length) {

		victoire();

	}

}

var exchange = function(image) {

	var body;
	var center;
	var div;
	var temp = {};
	var id;
	var imageBis;
	var l;
	var c;
	
	id = image.getAttribute("id");
	id = id.substr(1);
	l = Math.floor(id/10);
	c = id - (l*10);

	temp.src = image.getAttribute("src");
	temp.order = image.getAttribute("data-order");

	imageBis = document.querySelector("#i" + (l - 1) + c);

	if(imageBis) {

		if(imageBis.getAttribute("data-statut") === "original") {

			image.setAttribute("src", imageBis.getAttribute("src"));
			image.setAttribute("data-order", imageBis.getAttribute("data-order"));
			imageBis.setAttribute("src", temp.src);
			imageBis.setAttribute("data-order", temp.order);

		}

	}

	imageBis = document.querySelector("#i" + (l + 1) + c);

	if(imageBis) {

		if(imageBis.getAttribute("data-statut") === "original") {

			image.setAttribute("src", imageBis.getAttribute("src"));
			image.setAttribute("data-order", imageBis.getAttribute("data-order"));
			imageBis.setAttribute("src", temp.src);
			imageBis.setAttribute("data-order", temp.order);

		}

	}

	imageBis = document.querySelector("#i" + l + (c - 1));

	if(imageBis) {

		if(imageBis.getAttribute("data-statut") === "original") {

			image.setAttribute("src", imageBis.getAttribute("src"));
			image.setAttribute("data-order", imageBis.getAttribute("data-order"));
			imageBis.setAttribute("src", temp.src);
			imageBis.setAttribute("data-order", temp.order);

		}

	}

	imageBis = document.querySelector("#i" + l + (c + 1));

	if(imageBis) {

		if(imageBis.getAttribute("data-statut") === "original") {

			image.setAttribute("src", imageBis.getAttribute("src"));
			image.setAttribute("data-order", imageBis.getAttribute("data-order"));
			imageBis.setAttribute("src", temp.src);
			imageBis.setAttribute("data-order", temp.order);

		}

	}

	vider();

	verif_victoire();

}

var tag = function(image, param) {

	if(image.getAttribute("data-statut") === "unselected") {

		if(param === 0) {

			vider();

			image.setAttribute("data-statut", "original");

		} else {

			image.setAttribute("data-statut", "taged");

		}

	} else if(image.getAttribute("data-statut") === "taged") {

		exchange(image);

	} else if(image.getAttribute("data-statut") === "original") {

		vider();

	}

}

var select = function(e) {

	 var image;
	 var id;
	 var l, c;
	 var data;

	id = e.target.getAttribute("id");
	id = id.substr(1);
	l = Math.floor(id/10);
	c = id - (l*10);

	data = e.target.getAttribute("data-statut");

	tag(e.target, 0);

	if(data === "unselected") {

		image = document.querySelector("#i" + (l - 1) + c);
		if(image) {

			tag(image, 1);

		}

		image = document.querySelector("#i" + (l + 1) + c);
		if(image) {

			tag(image, 1);

		}

		image = document.querySelector("#i" + l + (c - 1));
		if(image) {

			tag(image, 1);

		}

		image = document.querySelector("#i" + l + (c + 1));
		if(image) {

			tag(image, 1);

		}

	}

}

var aff_puzzle = function (e) {

	var id = e.target.getAttribute("id");
	var puzzleJ;
	var puzzleA;
	var br;
	var bite = [];
	var b;
	var c;
	var body = document.querySelector("body");
	var center = body.querySelector("center");
	var div = center.querySelector("div");
	var j;
	var k;
	var l;

	div.innerHTML = "";

	puzzleJ = puzzle["P" + id][Math.floor(Math.random() * puzzle["P" + id].length)];

	i = 0;
	j = 1;
	l = 0;

	do {

		c = false;

		if(i === 0) {

			b = Math.floor(Math.random() * Math.pow(Number(id),2));
			bite[i] = b;

		} else {

			do {

				b = Math.floor(Math.random() * Math.pow(Number(id),2));
				k = -1;

				do {

					k++;

				} while(k < bite.length && b !== bite[k]);

				if(k === bite.length && b !== bite[k]) {

					c = true;
					bite[i] = (b);

				}


			} while(c !== true);

		}

		puzzleA = document.createElement("img");
		puzzleA.setAttribute("id", "i" + (j - 1) + l);
		puzzleA.setAttribute("src", "puzzle30" + b + ".jpg");
		puzzleA.setAttribute("data-statut", "unselected");
		puzzleA.setAttribute("data-order", bite[i]);

		puzzleA.addEventListener("click", select);
		div.appendChild(puzzleA);

		l++;

		if(j * Number(id) - 1 === i) {

			br = document.createElement("br");
			div.appendChild(br);
			j++;
			l = 0;

		}

		i++;

	} while(i < (Math.pow(Number(id),2)));

}

var mon_script = function () {

	var body = document.querySelector("body");
	var p = body.querySelector("p");
	var center
	var div;
	var img;

	div = document.createElement("div");

	for(i = 3; i < 6; i++) {

		img = document.createElement("img");

		img.setAttribute("id", i);
		img.setAttribute("src", /*"p" + i + ".png"*/"pendu" + i + ".png");

		img.addEventListener("click", aff_puzzle);
		div.appendChild(img);

	}


	center = document.createElement("center");

	body.insertBefore(center, p);

	center.appendChild(div);

}

window.addEventListener("load", mon_script);
