const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servicio', {
    id_servicio: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    horario: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_administrador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'id_usuario'
      }
    },
    id_servicioSolicitado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'solicitud',
        key: 'id_solicitud'
      }
    }
  }, {
    sequelize,
    tableName: 'servicio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_servicio" },
        ]
      },
      {
        name: "id_administrador",
        using: "BTREE",
        fields: [
          { name: "id_administrador" },
        ]
      },
      {
        name: "id_servicioSolicitado",
        using: "BTREE",
        fields: [
          { name: "id_servicioSolicitado" },
        ]
      },
    ]
  });
};
