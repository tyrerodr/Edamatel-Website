const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('articulos_compra', {
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    descuento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    id_articulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'articulo',
        key: 'id_articulo'
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuario',
        key: 'id_usuario'
      }
    }
  }, {
    sequelize,
    tableName: 'articulos_compra',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
          { name: "id_articulo" },
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
