const { Tools } = require('../models/main');

class ToolsService {
    static list() {
        return Tools.findAll().then(resp => console.log(resp));
    }

    static buscar(query) {
        return [];
    }

    static create(tools) {
        return {};    
    }

    static remove(id) {
        return {};
    }
}