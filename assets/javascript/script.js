const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    //i: "dot dot_selected fa-regular fa-circle",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    //i: "dot fa-regular fa-circle",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    //i: "dot fa-regular fa-circle",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    //i: "dot fa-regular fa-circle",
  },
];

//methode 1
let compteur = 0;
let point = 0;

let arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("click", () => {
  //alert("fleche de gauche");
	compteur--;
	if (compteur < 0) {
		compteur = slides.length -1;
	}
	document.getElementById("image1").src = "assets/images/slideshow/" + slides[compteur].image;
  document.getElementById("tag1").innerHTML = slides[compteur].tagLine;
  document.getElementById("point").hasAttribute = slides[compteur].tagLine;
});
arrow_left.addEventListener("click", () => {
  point--;
  if (point < 0) {
    point = slides.length -1;
  }
  document.getElementById("image1").src = "assets/images/slideshow/" + slides[compteur].image;
  document.getElementById("tag1").innerHTML = slides[compteur].tagLine;
  //document.getElementById("point")
});

let arrow_right = document.getElementById("arrow_right");
arrow_right.addEventListener("click", () => {  
  //alert("fleche de droite");
	compteur++;
	if (compteur >= slides.length) {
		compteur = 0;
	}
	document.getElementById("image1").src = "assets/images/slideshow/" + slides[compteur].image;
	document.getElementById("tag1").innerHTML = slides[compteur].tagLine;
   //document.getElementById("point")
});
arrow_right.addEventListener("click", () => {
    
});



/*
//methode 2
arrow_left.addEventListener("click", () => {
  //alert("fleche de gauche");
  compteur--;
  point--;
  if (compteur < 0, point < 0) {
    compteur = slides.length -1
    point = slides.length -1;
  }
  document.getElementById("image1").src = "assets/images/slideshow/" + slides[compteur].image;
  document.getElementById("tag1").innerHTML = slides[compteur].tagLine;
  //document.getElementById("point")
});

arrow_right.addEventListener("click", () => {
  //alert("fleche de droite");
  compteur++;
  point++;
  if (compteur >= 0, point >= 0) {
    compteur = slides.length +1
    point = slides.length +1
  }
  document.getElementById("image1").src = "assets/images/slideshow/" + slides[compteur].image;
  document.getElementById("tag1").innerHTML = slides[compteur].tagLine;
 //document.getElementById("point")
});
*/