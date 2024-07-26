let btnSumar = document.getElementById("btn-sumar");
let btnRestar = document.getElementById("btn-restar");
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let resultado = document.querySelector(".resultado");

btnSumar.addEventListener("click", function () {
  let num1 = parseInt(valor1.value) || 0;
  let num2 = parseInt(valor2.value) || 0;
  let suma = num1 + num2;
  resultado.innerHTML = `${suma}`;
});

btnRestar.addEventListener("click", function () {
  let num1 = parseInt(valor1.value) || 0;
  let num2 = parseInt(valor2.value) || 0;

  if (num1 < num2) {
    alert(
      "El primer número debe ser mayor o igual al segundo número para evitar resultados negativos"
    );
  } else {
    let resta = num1 - num2;
    resultado.innerHTML = `${resta}`;
  }
});
