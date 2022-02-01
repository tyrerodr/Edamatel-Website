const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_noticias', {
    tipo: {
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
    tableName: 'tipo_noticias',
    timestamps: false
  });
};