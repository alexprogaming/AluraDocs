import { randomBytes, scryptSync } from "crypto";
function CryptoSecretPassword(senha){
  const salSenha = randomBytes(16).toString("hex");
  const hashSenha = scryptSync(senha, salSenha, 64).toString("hex"); 
  return {hashSenha, salSenha};
}

export default CryptoSecretPassword;