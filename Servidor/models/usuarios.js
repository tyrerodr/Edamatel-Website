const Sequelize = require('sequelize');


module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cedula: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nombre: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    apellido: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    correo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ciudad: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contraseña: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    telefono: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    usuario: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tipo: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuario',
    timestamps: false
  });
};

