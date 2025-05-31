import { emitirAdicionarDocumento } from "./socket-front-index.js";
import { obterCookie, removeCookie } from "./utils/definirCookie.js";

const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDocumento = document.getElementById("input-documento");
//const notificarDocumento = document.getElementById("alertDocumentoCriado")
const logout = document.getElementById("botao-logout")

logout.addEventListener("click", () => {
  removeCookie("tokenJwt")
  alert("Usuario desconectado com sucesso")
  window.location.href = "/login/index.html"
})

form.addEventListener("submit", (evento) => {
  evento.preventDefault(); 
  emitirAdicionarDocumento(inputDocumento.value);
  inputDocumento.value = "";
});

const documentosNotificados = new Set();

function Documendo_Adicionado(nomeDocumento){
  const notificarDocumento = document.createElement("div")
  notificarDocumento.className = "notificacao"

  if(documentosNotificados.has(nomeDocumento)){
  return 
  }
  documentosNotificados.add(nomeDocumento);
  notificarDocumento.innerHTML += `Documento ${nomeDocumento} adicionado com sucesso `

  setTimeout(() => {
    notificarDocumento.innerHTML = '';
  }, 4000); // limpa após 4 segundos

  document.body.appendChild(notificarDocumento);
}


function documento_existente(nomeDocumento){
  const notificarDocumento = document.createElement("div")
  notificarDocumento.className = "notificacao"

  if(documentosNotificados.has(nomeDocumento)){
  return 
  }
  documentosNotificados.add(nomeDocumento);
  notificarDocumento.innerHTML += `Documento já existente`

  setTimeout(() => {
    notificarDocumento.innerHTML = '';
  },3000)

  document.body.appendChild(notificarDocumento);
}

function inserirLinkDocumento(nomeDocumento) {

  listaDocumentos.innerHTML += `
    <a
      href="/documento/index.html?nome=${nomeDocumento}"
      class="list-group-item list-group-item-action"
      id="documento-${nomeDocumento}"
    >
      ${nomeDocumento}
    </a>
  `;
}

function removerLinkDocumento(nomeDocumento) {
  const documento = document.getElementById(`documento-${nomeDocumento}`);

  listaDocumentos.removeChild(documento);
}

export { inserirLinkDocumento, removerLinkDocumento, documento_existente, Documendo_Adicionado };
