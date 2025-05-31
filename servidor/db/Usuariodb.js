import CryptoSecretPassword from "../../utils/CryptoSecretPassword.js";
import { usuarioSelecao } from "./dbConnect.js";

function encontrarUsuarios(nome) {
  return usuarioSelecao.findOne({nome})
}


function cadastrarUsuario({nome, senha}) {
  const {hashSenha, salSenha} = CryptoSecretPassword(senha)
  return usuarioSelecao.insertOne({nome: nome, hashSenha, salSenha});
}

export  { cadastrarUsuario, encontrarUsuarios }