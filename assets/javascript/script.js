const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let compteur = 0;
let arrow_left = document.getElementById("arrow_left");
let bulletpoint = document.getElementById("bulletpoint"); 
arrow_left.addEventListener("click", () => {
	compteur--;
	if (compteur < 0) {
		compteur = slides.length -1;
	}
	document.getElementById("image1").src = "assets/images/slideshow/" + slides[compteur].image;
	document.getElementById("tag1").innerHTML = slides[compteur].tagLine;
	//document.getElementById("bulletpoint").innerHTML = slides[compteur].tagLine;
});

let arrow_right = document.getElementById("arrow_right");
arrow_right.addEventListener("click", () => {
	compteur++;
	if (compteur >= slides.length) {
		compteur = 0;
	}
	document.getElementById("image1").src = "assets/images/slideshow/" + slides[compteur].image;
	document.getElementById("tag1").innerHTML = slides[compteur].tagLine;
	//document.getElementById("bulletpoint").innerText = slides[compteur];
});