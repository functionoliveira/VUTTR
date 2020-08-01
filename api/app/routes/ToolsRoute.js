var express = require('express');
const ToolsService = require('../services/ToolsService');
const ToolsRouter = express.Router();

// Rota para listar ferramentas filtrando pela query string
ToolsRouter.get('/', function(req, res) {
    ToolsService.search(req.query)
        .then(tools => {
            res.send(tools);
        })
        .catch(err => {
            res.send("erro " + err);
        });
});

// Rota para recuperar uma ferramenta
ToolsRouter.get('/:id', function(req, res) {
    res.send(`Get tools id ${req.params.id}`);
});

// Rota para criar uma ferramenta
ToolsRouter.post('/', function(req, res) {
    ToolsService.create(req.body)
        .then(resp => {
            res.send(resp);
        })
        .catch(err => {
            res.send(err);
        });
});

// Rota para remover uma ferramenta
ToolsRouter.delete('/:id', function(req, res) {
    ToolsService.remove(req.params.id)
        .then(removed => {
            res.send(removed);
        })
        .catch(err => {
            res.send(err);
        });
});

module.exports = ToolsRouter;