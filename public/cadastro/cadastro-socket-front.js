const socket = io("http://localhost:3000")
function registrarCadastro(dados){
  socket.emit("registrar_cadastro", dados)
}

socket.on("cadastro_sucesso", (nome) => {
  alert(`Cadastro realizado com sucesso, seja bem vindo ${nome}`)
})
socket.on("cadastro_falha", () => {
  alert("Cadastro falhou")
})
socket.on("cadastro_existente", (dados) => {
  alert(`O usuário ${dados.nome} ja possui cadastro`)
})
socket.on("preencher-input", () => {
  alert("Preencha o campo Vazio")
})
export default registrarCadastro