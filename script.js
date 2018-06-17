var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("main");

color1.addEventListener("input", setBackground);

color2.addEventListener("input", setBackground);

function gradientText() {
  var text = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = text;
  return text;
}

function setBackground() {
  body.style.background = gradientText();
}
