const semaforo = document.querySelector("#semaforo");
const img = document.querySelector("#img");
const verde = document.getElementById("green");
let imgs = ["vermelho.png", "amarelo.png", "verde.png"];
let indice = 0;
let intervalo;

document.getElementById("red").addEventListener("click", function () {
  img.src = "vermelho.png";
  semaforo.appendChild(img);
});

document.getElementById("yellow").addEventListener("click", function () {
  img.src = "amarelo.png";
  semaforo.appendChild(img);
});

function green() {
  img.src = "verde.png";
  semaforo.append(img);
}

function automatico() {
  indice = (indice + 1) % imgs.length;
  img.src = imgs[indice];
  semaforo.appendChild(img);
}

function iniciarTroca() {
  if (!intervalo) {
    intervalo = setInterval(automatico, 1000);
  }
}
function stopAutomatic(){
    clearInterval(intervalo)
}

verde.addEventListener("click", green);
document.getElementById("automatic").addEventListener("click", iniciarTroca);
