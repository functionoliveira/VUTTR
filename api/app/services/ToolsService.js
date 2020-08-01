const { Tools } = require('../db/models/index');
const { Sequelize, Op } = require('sequelize');

class ToolsService {
    static list() {
        return Tools.findAll();
    }

    static search(query) {
        let dbQuery = query.q ? { title : { [Op.iLike]: `%${query.q}%` } } : {};
        return Tools.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: dbQuery
        });
    }

    static create(tools) {
        return Tools.create({ ...tools });
    }

    static remove(id) {
        return Tools.findByPk(id)
            .then(tools =>{
                return tools.destroy();
            });
    }
}

module.exports = ToolsService;