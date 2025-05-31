import { definirCookie } from "../utils/definirCookie.js";

const socket = io("http://localhost:3000")

function autenticarUsuario(dados){
  socket.emit("autenticar_usuario", dados)
}

socket.on("login_sucesso", (tokenJwt) => {
  console.log("login sucesso");
  
  alert("login efetuado com sucesso")
  definirCookie("tokenJwt", tokenJwt)
  window.location.href = "/"
});
socket.on("login_error", () => {
 alert("login inválido")
});

socket.on("Usuario_nao_existe", () => {
  alert("Usuario não existe")
})



export default autenticarUsuario