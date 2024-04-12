const input = document.getElementById("res");
const arrayTeclas = [
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  ",",
];
input.focus()

document.querySelectorAll(".tecla").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.valor;
    input.value += value;
    input.focus();
  });
});

document.getElementById("clear").addEventListener("click", apagar);
document.getElementById("apagar").addEventListener("click", backspaceBtn);
document.getElementById("calc").addEventListener("click", calcular);

function backspaceBtn() {
  input.value = input.value.slice(0, -1);
  input.focus();
}

function apagar() {
  input.value = "";
  input.focus();
}

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (arrayTeclas.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calcular();
  }
  if (ev.key === "Escape") {
    apagar();
  }
  if (ev.key === "Delete") {
    input.value = input.value.slice(1, input.length);
  }
});

function calcular() {
  const result = eval(input.value);
  input.value = result.toFixed(4);
  input.focus();
}
