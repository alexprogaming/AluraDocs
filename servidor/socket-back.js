import "dotenv/config";

import cadastroEvento from "./registrarEventos/cadastro.js";
import login from "./registrarEventos/login.js";
import registrarDocumentos  from "./registrarEventos/registrarDocumentos.js";
import registrarEventosInicio  from "./registrarEventos/registrarEventosInicio.js";
import io from "./servidor.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autorizarUsuario)

nspUsuarios.on("connection", (socket) => {
  registrarEventosInicio(socket, nspUsuarios);
  registrarDocumentos(socket, nspUsuarios);
})

io.of("/").on("connection", (socket) => {
  cadastroEvento(socket, io);
  login(socket, io);
});
