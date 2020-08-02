var express = require('express');
const ToolsService = require('../services/ToolsService');
const ToolsRouter = express.Router();

// Rota para listar ferramentas filtrando pela query string
ToolsRouter.get('/', function(req, res) {
    let promise;
    
    if(req.query.q){
        promise = ToolsService.searchByTitle(req.query.q);
    }else if(req.query.tags_like) {
        promise = ToolsService.searchByTags(req.query.tags_like);
    }else{
        promise = ToolsService.list();
    }

    promise.then(tools => {
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
            res.status(201).send(resp);
        })
        .catch(err => {
            res.send(err);
        });
});

// Rota para remover uma ferramenta
ToolsRouter.delete('/:id', function(req, res) {
    ToolsService.remove(req.params.id)
        .then(removed => {
            res.status(204).send(removed);
        })
        .catch(err => {
            res.send(err);
        });
});

module.exports = ToolsRouter;