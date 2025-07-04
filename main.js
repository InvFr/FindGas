// Selecciona el botón de hamburguesa
const btn = document.querySelector(".menu-toggle");

// Selecciona el menú horizontal
const menu = document.querySelector(".menu-horizontal");

// Al hacer clic en el botón de hamburguesa
btn.addEventListener("click", () => {
  // Alterna (agrega o quita) la clase "active" en el menú
  // Esto hace que se muestre o se oculte
  menu.classList.toggle("active");

  // (opcional) También puedes alternar una clase en el botón si quieres cambiar su apariencia
  // btn.classList.toggle("open");
});

// VALIDACION DE FORMULARIO
const form = document.querySelector('form[name="frm"]');
form.addEventListener("submit", (event) => {
  const fname = form.elements["nombres"].value;
  const flastname = form.elements["apellidos"].value;
  const femail = form.elements["Email"].value;
  const fphone = form.elements["telefono"].value;
  const fnumdoc = form.elements["NumeroDoc"].value;

  if (!fname || !flastname || !femail || !fphone || !fnumdoc) {
    event.preventDefault();
    alert("Por favor, complete todos los campos del formulario");
  } else if (!validateEmail(femail)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo valido");
  } else {
    const confirmation = confirm(
      "Esta a punto de enviar el formulario, ¿Desea Continuar?"
    );
    if (!confirmation) {
      event.preventDefault();
    }
  }
});

//CREAR FUNCION validateEmail(femail)
function validateEmail(femail) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]/;
  return re.test(String(femail).toLowerCase());
}

/* Evento al enviar el formulario de contacto
//document.getElementById("formularioContactenos").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita el envío real del formulario

  // Muestra el mensaje de confirmación
  const mensaje = document.getElementById("mensajeEnviado");
  mensaje.style.display = "block";

   /*Opcional: limpiar el formulario
   this.reset();*/

  // Ocultar mensaje después de 5 segundos
  /*setTimeout(() => {
    mensaje.style.display = "none";
  }, 4000);
});*/





