var express = require('express');
const ToolsRouter = express.Router();

// Rota para listar ferramentas filtrando pela query string
ToolsRouter.get('/', function(req, res) {
    res.send(`List tools ${JSON.stringify(req.query)}`);
});

// Rota para recuperar uma ferramenta
ToolsRouter.get('/:id', function(req, res) {
    res.send(`Get tools id ${req.params.id}`);
});

// Rota para criar uma ferramenta
ToolsRouter.post('/', function(req, res) {
    res.send(`Add a tools ${JSON.stringify(req.body)}`);
});

// Rota para remover uma ferramenta
ToolsRouter.delete('/:id', function(req, res) {
    res.send(`Remove a tools id ${req.params.id}`);
});

module.exports = ToolsRouter;