import { inserirLinkDocumento, documento_existente, removerLinkDocumento, Documendo_Adicionado } from "./index.js";
import { obterCookie } from "./utils/definirCookie.js";

const socket = io("http://localhost:3000/usuarios", {
  auth: {
    token: obterCookie("tokenJwt")
  }
});

socket.on("connect_error", (erro) => {
  alert(erro)
  window.location.href = "/login/index.html"
})

socket.emit("obter_documentos", (documentos) => {
  documentos.forEach((documento) => {
    inserirLinkDocumento(documento.nome);
  });
});

function emitirAdicionarDocumento(nome) {
  socket.emit("adicionar_documento", nome);
}

socket.on("adicionar_documento_interface", (nome) => {
  inserirLinkDocumento(nome)
  Documendo_Adicionado(nome)
}); 

//Documendo_Adicionado, inserirLinkDocumento

socket.on("documento_existente", (nome) => {
  documento_existente(nome)
});

socket.on("excluir_documento_sucesso", removerLinkDocumento);


export { emitirAdicionarDocumento };
