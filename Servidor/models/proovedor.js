const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proovedor', {
    id_proovedor: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RUC: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CIUDAD: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    redes: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    id_articulo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'articulo',
        key: 'id_articulo'
      }
    }
  }, {
    sequelize,
    tableName: 'proovedor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_proovedor" },
        ]
      },
      {
        name: "id_articulo",
        using: "BTREE",
        fields: [
          { name: "id_articulo" },
        ]
      },
    ]
  });
};
