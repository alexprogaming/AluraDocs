const conexaoDocumentos = []

function encontrarConexao(nomeDocumento, nomeUsuario) {
  return conexaoDocumentos.find((conexao) => {
    return (
      conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUsuario
    );
  });
}

function adicionarConexao(conexao){
  conexaoDocumentos.push(conexao)
  
}

function obterUsuarioDocumentos(nomeDocumento){
  return conexaoDocumentos
  .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
  .map((usuario) => usuario.nomeUsuario)

}

function removerConexao(nomeDocumento, nomeUsuario){
  const indice = conexaoDocumentos.findIndex((conexao) => {
  return conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUsuario
  })

  if(indice !== -1){
    conexaoDocumentos.splice(indice, 1)
  }
}

export {encontrarConexao ,adicionarConexao, obterUsuarioDocumentos, removerConexao}