const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

class Tools extends Model {}
Tools.init({
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, 
{
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Tools' // We need to choose the model name
});

module.exports = Tools;