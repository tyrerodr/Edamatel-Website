const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('compra', {
    id_compra: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha_compra: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_tipo_pago: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipos_pago',
        key: 'id_tipo_pago'
      }
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'id_usuario'
      }
    }
  }, {
    sequelize,
    tableName: 'compra',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_compra" },
        ]
      },
      {
        name: "id_cliente",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
      {
        name: "id_tipo_pago",
        using: "BTREE",
        fields: [
          { name: "id_tipo_pago" },
        ]
      },
    ]
  });
};
