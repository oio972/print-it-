//tableau images
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
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
//compteur
let compteur = 0;
let point = 0;
//function
let changementsource = function() {
	document.getElementById("image1").src = "assets/images/slideshow/" + slides[compteur].image;
  document.getElementById("tag1").innerHTML = slides[compteur].tagLine;

  if(document.querySelector(".dot_selected")!= null){
    document.querySelector(".dot_selected").classList.remove("dot_selected");
  }

  if(document.getElementById("point"+compteur)!= null){
    document.getElementById("point"+compteur).classList.add("dot_selected");
  }
}
// traitement du click sur les dots
let elements = document.getElementsByClassName("dot");
let myFunction = function() {
    let attribute = this.attribute("id");
    compteur = attribute.replace("point","");
    changementsource();
  };
//boucle
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}
//fleche de gauche
let arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("click", () => {
  //alert("fleche de gauche");
	compteur--;
	if (compteur < 0) {
		compteur = slides.length -1;
	}
  changementsource();
});
//fleche de droite
let arrow_right = document.getElementById("arrow_right");
arrow_right.addEventListener("click", () => {  
  //alert("fleche de droite");
	compteur++;
	if (compteur >= slides.length) {
		compteur = 0;
	}
  changementsource();
});




   


