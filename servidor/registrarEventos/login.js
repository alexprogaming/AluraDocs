import autenticarUsuario from "../../utils/autenticarUsuario.js";
import gerarJwt from "../../utils/tokenJwt.js"
import { encontrarUsuarios } from "../db/Usuariodb.js";

function login(socket, io){

  socket.on("autenticar_usuario", async ({nome, senha}) => {
  
  const usuario = await encontrarUsuarios(nome);
  
  if(usuario){

  const autenticar = await autenticarUsuario(usuario, senha)
  
  if(autenticar){
    const tokenJwt = await gerarJwt({nomeUsuario: nome})
  
    socket.emit("login_sucesso", tokenJwt)
  } else {
    socket.emit("login_error")
  }} else{
    socket.emit("Usuario_nao_existe")
  }
})

}

export default login;