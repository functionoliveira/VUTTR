## VUTTR (Very Useful Tools to Remember)
Pequena aplicação backend utilizando NodeJS, Express, Sequelize, Postegres e Docker. A aplicação se propõe a listar, cadastrar, remover e buscar informações sobre ferramentas uteis para desenvolvimento.

## Passos para rodar o projeto
1. Dentro da pasta api/ executar o comando <code>docker-compose build</code> realizar o build do docker.
2. Após o build finalizar entre na pasta app/ e executar o comando <code>npm ci</code>.
3. Dentro da pasta api/ executar o comando <code>docker-compose up</code> realizar o build do docker.
4. Executar o comando <code>docker exec -it vuutr bash</code> para acessar o docker.
5. Executar o comando <code>npx sequelize db:migrate</code> para que a estrutura do banco de dados seja criada.
6. Executar o comando <code>npx sequelize db:seed:all</code> para carregar dados nas tabelas.
7. No browser acesse http://localhost:8080/health, a mensagem "The server is up!" indica que o servidor está funcionando.

## Libs
* Sequelize: A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.

* Body Parser: Node.js body parsing middleware.

## Rotas
GET /tools/ -> lista as ferramentas existentes na base. Pode ser utilizado os parametros 
<code>?q=teste</code> para filtrar por título e <code>?tags_like=teste</code> para filtrar
por tags

POST /tools/ -> Cria um novo registro. é necessário enviar um body com as informações da
ferrementa. Exemplo de body: 
<code>
{ 
    "title": "teste", 
    "link": "https://teste.com", 
    "description": "testando...",
    "tags": [{"name": "tag1"}, {"name": "tag2"}]
}
</code>

DELETE /tools/:id -> Deleta um registro baseado no id passado no endpoint.