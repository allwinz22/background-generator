var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color1Val = document.getElementById("color1Val");
var color2Val = document.getElementById("color2Val");
var bodyBackground = document.getElementsByTagName("body");
var orientation = "to right";

function colorChanger(){
    document.body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    color1Val.textContent = color1.value;
    color2Val.textContent = color2.value;
}

color1.addEventListener("input", colorChanger);
color2.addEventListener("input", colorChanger);