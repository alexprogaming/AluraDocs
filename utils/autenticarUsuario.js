import {scryptSync, timingSafeEqual} from "crypto"
function autenticarUsuario(usuario, senha){
const hashUsuario = scryptSync(senha, usuario.salSenha, 64)
const hashReal = Buffer.from(usuario.hashSenha, "hex")
const autenticar = timingSafeEqual(hashUsuario, hashReal)
return autenticar
}

export default autenticarUsuario;