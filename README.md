# 📄 AluraDocs - Gerenciamento de Acesso com Autenticação JWT e Socket.IO

Este projeto foi desenvolvido durante os estudos na [Alura](https://www.alura.com.br), com foco em práticas modernas de autenticação, autorização e controle de conexões em tempo real utilizando **JWT** e **Socket.IO**. A aplicação simula um ambiente colaborativo de edição de documentos, similar ao Google Docs.

## 🚀 Funcionalidades Implementadas

### 1. Autenticação com JWT

- ✅ Criptografia de senhas no processo de **cadastro**.
- ✅ Geração de **JWT (JSON Web Token)** no **servidor** após o login.
- ✅ Envio do token para o **front-end** e armazenamento seguro nos **cookies**.
- ✅ Manipulação dos cookies para:
  - Ler e validar o token.
  - Remover o token no processo de **logout**.

### 2. Controle de Acesso com Middleware (Socket.IO)

- ✅ Utilização de **middlewares no servidor** para validar a autenticação dos clientes via JWT.
- ✅ Criação de um **namespace privado** chamado `/usuarios`, acessível somente a usuários autenticados.
- ✅ Garantia de que apenas usuários com token válido possam acessar rotas e eventos protegidos.

### 3. Gerenciamento de Conexões Locais

- ✅ Lista local para rastrear as conexões em documentos, permitindo saber **quais usuários estão conectados a qual documento**.
- ✅ Uso da propriedade `socket.data` para armazenar dados específicos de cada conexão:
  - Verificação de **entradas duplicadas** em documentos.
  - Possibilidade de utilizar essas informações para expandir o projeto com novos recursos no futuro (ex: edição simultânea, logs, histórico de acessos).

## 🛠️ Tecnologias Utilizadas

- Node.js
- Socket.IO
- JWT (jsonwebtoken)
- Bcrypt (para criptografar senhas)
- Express.js
- Cookies (armazenamento e leitura no front-end)

## 📚 Aprendizados

Este projeto me proporcionou o aprendizado prático sobre:

- Boas práticas de **autenticação e segurança**.
- Criação de **middlewares personalizados** no Socket.IO.
- Controle de acesso a funcionalidades com base em **namespaces** e tokens.
- Manipulação e rastreamento de conexões em tempo real.
- Integração entre **back-end e front-end** usando cookies e sockets.

## 📁 Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Entre no diretório
cd seu-repositorio

# Instale as dependências
npm install

# Inicie o servidor
npm start
