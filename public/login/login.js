import autenticarUsuario from "./usuario-socket-front.js";

const form = document.getElementById("form-login");

form.addEventListener("submit", (evento) => {
  
  evento.preventDefault();
  const nome = form["input-usuario"].value
  const senha = form["input-senha"].value
  
  autenticarUsuario({nome, senha});
  
});