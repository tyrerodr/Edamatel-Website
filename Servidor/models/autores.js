const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('autores', {
    nombre: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'autores',
    timestamps: false
  });
};