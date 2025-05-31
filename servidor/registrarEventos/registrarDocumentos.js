
import {
  adicionarDocumento,
  encontrarDocumento,
  obterDocumentos,
} from "../db/documentosDb.js";

function registrarDocumentos(socket, io){
  socket.on("obter_documentos", async (devolverDocumentos) => {
    const documentos = await obterDocumentos();
    devolverDocumentos(documentos);
  });

  socket.on("adicionar_documento", async (nome) => {
    const documentoExiste = (await encontrarDocumento(nome)) !== null; // diferente de null = true "não é igual a null"

    if (documentoExiste) {
      socket.emit("documento_existente", nome);
    } else {
      const resultado = await adicionarDocumento(nome);

      if (resultado.acknowledged) {
        io.emit("adicionar_documento_interface", nome);
      }
    }
  });

  
}

export default registrarDocumentos ;