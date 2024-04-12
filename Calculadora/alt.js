const input = document.getElementById("res");

const teclasArr = [
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
  ","
];
// input recebe o valor das teclas
document.querySelectorAll(".tecla").forEach(function (teclaBtn) {
  teclaBtn.addEventListener("click", function () {
    const value = teclaBtn.dataset.valor;
    input.value += value;
  });
});
document.getElementById("apagar").addEventListener("click", backspaceBtn);
document.getElementById("clear").addEventListener("click", apagar);


function backspaceBtn() {
  input.value = input.value.slice(0, -1);
}

function apagar() {
  input.value = "";
  input.focus();
}

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (teclasArr.includes(ev.key)) {
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
    apagar();
  }
});

function calcular() {
  const result = eval(input.value)
  input.value = result
  input.focus()
}
