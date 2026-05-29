# API de Cadastro de Clientes

## Descrição
[escreve aqui o que essa API faz em 2-3 linhas]

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
```bash
npm install
```

## Configuração
   
    
## Como executar

Ao abrir o terminal do codigo digite:
npm run start:dev

## Documentação das rotas

### Clientes

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /clientes | cria um qnovo cliente |
| GET | /clientes | busca o cliente de forma geral |
| GET | /clientes/search/name/:nome | busca o cliente pelo nome |
| GET | /clientes/search/email/:email | busca o cliente pelo email |
| GET | /clientes/:id | busca o cliente pelo ID|
| PUT | /clientes/:id | atualiza o cliente |
| DELETE | /clientes/:id | deleta o cliente |

## Exemplo de requisição

### Criar cliente

{
  "nome": "Joãozinho",
  "email": "joaozinho06@gmail.com",
  "phone": "999999999"
}

## Autores
- Pedro Hyago Cardoso de Lima - 01847939
- [nome do colega] - [matrícula do colega]