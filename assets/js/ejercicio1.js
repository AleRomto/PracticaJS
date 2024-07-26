var resultado = document.querySelector(".resultado");
var formulario = document.getElementById("formulario");

var txtNombre = document.getElementById("nombre");
var errorNombre = document.querySelector(".errorNombre");

var txtAsunto = document.getElementById("asunto");
var errorAsunto = document.querySelector(".errorAsunto");

var txtMensaje = document.getElementById("mensaje");
var errorMensaje = document.querySelector(".errorMensaje");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  var regExLetras =
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

  //   ^ --> Indica el inicio del contenido y lo valida desde el inicio.
  //   [a-zA-ZÀ-ÿ\u00f1\u00d1]+

  //   [a-zA-Z] ----> Acepta cualquier letra en mayúscula o minúscula del abecedario
  //   À-ÿ ----> Acepta los tildes (caracteres unicode)
  // \u00f1 ---> ñ minúscula
  // \u00d1: ----> Ñ mayúscula
  // + ----> Debe haber al menos UNA de las letras aceptadas

  // (\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*:     <----- permite nombres compuestos con espacios entre palabras

  //    \s* ---> Acepta espacios en blanco
  //    [a-zA-ZÀ-ÿ\u00f1\u00d1]* ----> Acepta cero o más letras
  //    *  ---> Significa que puede haber espacio entre las letras

  // [a-zA-ZÀ-ÿ\u00f1\u00d1]+   <---- asegura que la cadena termine con al menos una letra

  // $ ---> Indica el final del contenido y que la validación termine al final.

  //trim( ) elimina los espacios en blanco en ambos extremos del texto  <-- probanding para el futuro
  var nombre = txtNombre.value.trim();
  var asunto = txtAsunto.value.trim();
  var mensaje = txtMensaje.value.trim();

  var esValido = true;

  if (nombre === "") {
    errorNombre.textContent = "El nombre es requerido";
    esValido = false;
  } else if (!regExLetras.test(nombre)) {
    errorNombre.textContent = "Ingrese solo letras";
    esValido = false;
  } else {
    errorNombre.textContent = "";
  }

  if (asunto === "") {
    errorAsunto.textContent = "El asunto es requerido";
    esValido = false;
  } else if (!regExLetras.test(asunto)) {
    errorAsunto.textContent = "Ingrese solo letras";
    esValido = false;
  } else {
    errorAsunto.textContent = "";
  }

  if (mensaje === "") {
    errorMensaje.textContent = "El mensaje es requerido";
    esValido = false;
  } else if (!regExLetras.test(mensaje)) {
    errorMensaje.textContent = "Ingrese solo letras";
    esValido = false;
  } else {
    errorMensaje.textContent = "";
  }

  if (esValido) {
    resultado.textContent = "Mensaje enviado con éxito";
    txtNombre.value = "";
    txtAsunto.value = "";
    txtMensaje.value = "";
  } else {
    resultado.textContent = "";
  }
});
