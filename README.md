# API de Cadastro de Clientes

## Descrição
Essa Api foi criada com o intuito de cadastrar novos clientes de forma simples e prática,para facilitar o processo e o trabalho de quem utiliza esse tipo de ferramenta.

## Tecnologias utilizadas
- NestJS
- TypeScript
- MongoDB
- Mongoose
- class-validator
- class-transformer

## Pré-requisitos
- Node.js
- npm
- MongoDB Atlas

## Instalação
Ao abrir o terminal do codigo digite:
npm install
(que ja fará todas as instalações)
    
## Como executar

Ao abrir o terminal do codigo digite:
npm run start:dev

## Documentação das rotas

### Clientes

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /clientes | cria um novo cliente |
| GET | /clientes | busca o cliente de forma geral |
| GET | /clientes/search/name/:nome | busca o cliente pelo nome |
| GET | /clientes/search/email/:email | busca o cliente pelo email |
| GET | /clientes/:id | busca o cliente pelo ID|
| PUT | /clientes/:id | atualiza o cliente |
| DELETE | /clientes/:id | deleta o cliente |

## Exemplo de requisição

### Criar cliente
```json
{
  "nome": "Joãozinho",
  "email": "joaozinho06@gmail.com",
  "telefone": "999999999",
  "endereco":"Camaraselva"
}
```

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com:

```env
MONGO_URI=sua_string_de_conexao_aqui
```

## Autores
- Pedro Hyago Cardoso de Lima - 01847939
- Rafael José de França Santana  - 01832459