var css = document.querySelector("h3");
var css2 = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var linear = document.querySelector(".linear-gradient");
var radial = document.querySelector(".radial-gradient");
var button1 = document.querySelector(".random1");
var button2 = document.querySelector(".random2");

setLinear();
setRadial();

function setLinear(){
	linear.style.background = "linear-gradient(to right, " 
								+ color1.value 
								+ ", " 
								+ color2.value 
								+ ")";
	css.textContent = "background: " + linear.style.background;
}

function setRadial(){
	radial.style.background = "radial-gradient(" 
								+ color3.value 
								+ ", " 
								+ color4.value 
								+ " )";
	css2.textContent = "background: " + radial.style.background;
}

function getRandom(){
	return "#" + Math.floor(Math.random()*16777216).toString(16);
}

function setRandom01(){
	color1.value = getRandom();
	color2.value = getRandom();
	setLinear();
}

function setRandom02(){
	color3.value = getRandom();
	color4.value = getRandom();
	setRadial();
}

color1.addEventListener("input", setLinear);

color2.addEventListener("input", setLinear);

color3.addEventListener("input", setRadial);

color4.addEventListener("input", setRadial);

button1.addEventListener("click", setRandom01);

button2.addEventListener("click", setRandom02);

