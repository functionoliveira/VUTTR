const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');
const Tools = require("./Tools");

const models = {
    Tools: Tools.init(sequelize, Sequelize)
};
  
const db = {
    ...models,
    sequelize
};
  
module.exports = db;