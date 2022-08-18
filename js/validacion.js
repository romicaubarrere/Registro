function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}
function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}
function leoDatos() {
  let persona = {};
  persona.nombre = document.getElementById("nombre").value;
  persona.apellido = document.getElementById("apellido").value;
  persona.email = document.getElementById("email").value;
  persona.password1 = document.getElementById("password1").value;
  persona.password2 = document.getElementById("password2").value;
  persona.terminos = document.getElementById("terminos").checked;
  return persona;
}
function esVacio() {
  let persona = leoDatos();
  if (
    persona.nombre == "" ||
    persona.apellido == "" ||
    persona.email == "" ||
    persona.password1 == "" ||
    persona.password2 == "" ||
    persona.password1 <= 6 ||
    persona.password1 != persona.password2 ||
    persona.terminos == false
  ) {
    showAlertError();
  } else {
    showAlertSuccess();
  }
}
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("regBtn").addEventListener("click", () => {
    esVacio();
  });
});
