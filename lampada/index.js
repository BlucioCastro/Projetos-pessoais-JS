const acender = document.getElementById("acender");
const apagar = document.getElementById("apagar");
const quebrar = document.getElementById("quebrar");
const lampada = document.getElementById("lampada");
const img = document.createElement("img");
acender.addEventListener("click", function acender() {
  img.src = "ligada.png";
  lampada.appendChild(img);
});

apagar.addEventListener("click", function apagar() {
  img.src = "desligada.png";
  lampada.appendChild(img);
});

quebrar.addEventListener("click", function quebrar() {
  img.src = "quebrada.png";
  lampada.append(img);
});
