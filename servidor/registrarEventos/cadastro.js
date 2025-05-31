import { cadastrarUsuario, encontrarUsuarios } from "../db/Usuariodb.js";
function cadastroEvento(socket){
  socket.on("registrar_cadastro", async (dados) => {
    
    if(dados.nome !== "" & dados.senha !== ""){
      
      const usuarioExiste = await encontrarUsuarios(dados.nome)

      if(usuarioExiste === null){

      const usuario = await cadastrarUsuario(dados);
    
      if (usuario.acknowledged) {
        socket.emit("cadastro_sucesso", dados.nome);
      } else {
        socket.emit("cadastro_falha");
      }
    } else {
      socket.emit("cadastro_existente", dados);
    }

    } else {
      socket.emit("preencher-input")
    }
  }
)}

  export default cadastroEvento