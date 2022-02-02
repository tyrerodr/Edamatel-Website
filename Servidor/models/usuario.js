const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    id_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cedula: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    apellido: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ciudad: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    'contraseña': {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    usuario: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
};
