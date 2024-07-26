let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");
let btn5 = document.getElementById("btn-5");
let btn6 = document.getElementById("btn-6");
let divCaja = document.getElementById("caja");

btn1.addEventListener("click", function() {
    divCaja.style.backgroundColor = "#e53e3e";
});

btn2.addEventListener("click", function() {
    divCaja.style.backgroundColor = "#dd6b20";
});

btn3.addEventListener("click", function() {
    divCaja.style.backgroundColor = "#faf089";
});

btn4.addEventListener("click", function() {
    divCaja.style.backgroundColor = "#48bb78";
});

btn5.addEventListener("click", function() {
    divCaja.style.backgroundColor = "#81e6d9";
});

btn6.addEventListener("click", function() {
    divCaja.style.backgroundColor = "#d53f8c";
})