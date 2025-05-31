import { obterCookie } from "../utils/definirCookie.js";
import { alertarERedirecionar, atualizaTextoEditor, tratarAutorizacaoSucesso, atualizarInterfaceUsuarios } from "./documento.js";

const socket = io("http://localhost:3000/usuarios", {
  auth: {
    token: obterCookie("tokenJwt")
  }
});

socket.on("usuarios_no_documento", atualizarInterfaceUsuarios)

socket.on("autorizacao_sucesso", tratarAutorizacaoSucesso)

socket.on("connect_error", (erro) => {
  alert(erro);
  window.location.href = "/login/index.html"
})

function selecionarDocumento(dadosEntrada) {
  socket.emit("selecionar_documento", dadosEntrada, (texto) => {
    atualizaTextoEditor(texto);
  });
}

function emitirTextoEditor(dados) {
  socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

function emitirExcluirDocumento(nome) {
  socket.emit("excluir_documento", nome);
}

socket.on("excluir_documento_sucesso", (nome) => {
  alertarERedirecionar(nome);
});

socket.on("usuario_ja_no_documento", (usuario) => {
  alert(`Usuario ${usuario} já está conectado em outra pagina`)
  window.location.href = "/"
})

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };
