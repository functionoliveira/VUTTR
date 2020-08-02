const { Tools, Tags } = require('../db/models/index');
const { Sequelize, Op } = require('sequelize');

class ToolsService {
    static list() {
        return Tools.findAll({include: {model: Tags, as: 'tags', attributes: ["name"]},});
    }

    static searchByTitle(title_like) {
        let dbQuery = { title : { [Op.iLike]: `%${title_like}%` } };
        return Tools.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: {model: Tags, as: 'tags', attributes: ["name"]},
            where: dbQuery
        });
    }

    static searchByTags(tags_like) {
        let dbQuery = { "$tags.name$" : { [Op.iLike]: `%${tags_like}%` } };
        return Tools.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: {model: Tags, as: 'tags', attributes: ["name"]},
            where: dbQuery
        });   
    }

    static create(tools) {
        return Tools.create({ ...tools }, {
            include: ["tags"]
        });
    }

    static remove(id) {
        return Tools.findByPk(id)
            .then(tools =>{
                return tools.destroy();
            });
    }
}

module.exports = ToolsService;