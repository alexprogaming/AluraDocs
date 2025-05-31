import {
  atualizaDocumento,
  encontrarDocumento,
  excluirDocumento,
} from "../db/documentosDb.js";
import { adicionarConexao, obterUsuarioDocumentos, removerConexao, encontrarConexao } from "../../utils/adicionarConexao.js";

function registrarEventosInicio(socket, io) {
  
  socket.on("selecionar_documento", async ({nomeDocumento, nomeUsuario}, devolverTexto) => {

    const documento = await encontrarDocumento(nomeDocumento);
    if (documento) {

      const encontrarEntrada = encontrarConexao(nomeDocumento, nomeUsuario)

      if(!encontrarEntrada){
        
        socket.join(nomeDocumento);
        
        adicionarConexao({nomeDocumento, nomeUsuario})

        socket.data = {
            usuarioEntrou: true,
        };
  
        const usuariosNoDocumento = obterUsuarioDocumentos(nomeDocumento)
        io.to(nomeDocumento).emit("usuarios_no_documento", usuariosNoDocumento);
        
        
        devolverTexto(documento.texto);
      } else {
        socket.emit("usuario_ja_no_documento", nomeUsuario);
      }
      
    }

    socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizaDocumento(nomeDocumento, texto);

    if (atualizacao.modifiedCount) {
      socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
  });

  socket.on("excluir_documento", async (nome) => {
    const resultado = await excluirDocumento(nome);

    if (resultado.deletedCount) {
      io.emit("excluir_documento_sucesso", nome);
    }
  });

  socket.on("disconnect", ()=> {
    if (socket.data.usuarioEntrou) {
        removerConexao(nomeDocumento, nomeUsuario);
        const usuariosNoDocumento = obterUsuarioDocumentos(nomeDocumento);
        io.to(nomeDocumento).emit("usuarios_no_documento", usuariosNoDocumento);
        }
    })

  });
}

export default registrarEventosInicio ;
