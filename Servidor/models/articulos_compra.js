const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('articulos_compra', {
    id_articulo_compra: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    descuento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    precio_articulos: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    id_articulo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'articulo',
        key: 'id_articulo'
      }
    },
    id_compra: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'compra',
        key: 'id_compra'
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
          { name: "id_articulo_compra" },
        ]
      },
      {
        name: "id_articulo",
        using: "BTREE",
        fields: [
          { name: "id_articulo" },
        ]
      },
      {
        name: "id_compra",
        using: "BTREE",
        fields: [
          { name: "id_compra" },
        ]
      },
    ]
  });
};
