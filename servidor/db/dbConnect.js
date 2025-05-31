import { MongoClient } from "mongodb";

const cliente = new MongoClient(process.env.MONGODB_SECRET);

let documentosColecao, usuarioSelecao;

try {
  await cliente.connect();

  const db = cliente.db("Alura-Websockets");
  documentosColecao = db.collection("Documentos");
  usuarioSelecao = db.collection("Usuarios");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao, usuarioSelecao };
