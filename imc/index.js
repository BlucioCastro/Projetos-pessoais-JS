const nomeEl = document.getElementById("nome");
const alturaEl = document.getElementById("altura");
const pesoEl = document.getElementById("peso");
const resEl = document.getElementById("res");

document.getElementById("btnCalc").addEventListener("click", function () {
  const nome = nomeEl.value;
  const altura = Number(alturaEl.value);
  const peso = Number(pesoEl.value);
  let imc = peso / altura ** 2;
  let classificao;

  if (imc >= 30) {
    classificao = "OBESIDADE";
  } else if (imc >= 25) {
    classificao = "SOBREPESO";
  } else if (imc >= 18.5) {
    classificao = "NORMAL";
  } else {
    classificacao = "BAIXOPESO";
  }

  resEl.innerText = `${nome}, seu IMC é ${imc.toFixed(2)} - 
  Classificação: ${classificao}`;

  nomeEl.value = "";
  alturaEl.value = "";
  pesoEl.value = "";

  nomeEl.focus()
});
