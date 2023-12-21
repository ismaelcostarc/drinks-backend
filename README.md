# Drinks Backend

Projeto de um sistema onde o usuário pode visualizar bebidas e criar favoritos.

Nesse sistema o usuário pode:

- Visualizar uma lista de categoritas de bebidas;
- Clicar em uma categoria e visualizar as bebidas dentro dessa categoria;
- Pesquisar por bebidas;
- Fazer login e favoritar bebidas;
- Visualizar seus favoritos;

## Tecnologias

- Adonis 5
- PostgreSQL
- Typescript
- Swagger

## Setup

Requisitos:

- Docker
- Docker Compose
- Node

Se for a primeira vez que estiver rodando o projeto, rode o seguinte comando
para instalar as dependências, rodar as migrations e popular o banco de dados antes de subir o servidor:

```bash
make build
```

Se já tiver realizado o build da aplicação e desejar apenas subir o servidor, rode o seguinte comando:

```bash
make serve
```

Para encerrar o servidor:

```bash
make stop
```

Se desejar subir o servidor em modo watch: 

```bash
make watch
```

Para rodar os testes funcionais:

```bash
node ace test
```

## Rotas

|Método HTTP | Endpoint | Exige autenticação? |
|---|---|---|
|POST        | /api/v1/auth/register | Não
|POST        | /api/v1/auth/login | Não
|GET         | /api/v1/categories | Não
|GET         | /api/v1/categories/:id | Não
|GET         | /api/v1/categories/:categoryId/drinks | Não
|GET         | /api/v1/drinks | Não
|GET         | /api/v1/drinks/:id | Não
|GET         | /api/v1/auth/current-user | Sim
|GET         | /api/v1/favorites | Sim
|POST        | /api/v1/favorites | Sim
|DELETE      | /api/v1/favorites/:id | Sim

Para visualizar a documentação da API no Swagger, suba o servidor da aplicação e entre no endereço [http://localhost:3333/docs](http://localhost:3333/docs)

## Banco de Dados

Diagrama das tabelas do banco:

![database-diagram](./assets/drinks-database.png)

## Considerações

#### Dificuldades

- Tive dificuldades para separar a documentação do Swagger em diferentes arquivos. Quando eu separava e chamava no arquivo principal utilizando $ref, a documentação era gerada normalmente, porém os testes não conseguiam mais encontrar as especificações.

- Não consegui fazer com o que a instalação do `node_modules` fosse feita exclusivamente dentro do Docker. Por algum motivo que não encontrei, apesar de ter o comando no Dockerfile para instalar, isso não acontece. Logo, é necessário ter node instalado na própria máquina para poder executar o projeto

#### Pontos que podem ser desenvolvidos na API

- Podem ser criados métodos nos controllers para criar e atualizar as categorias e bebidas, e a documentação e testes para essas novas rotas.

- Os testes podem ser melhorados para cobrir mais casos possíveis, como erros, dado não encontrado, etc.