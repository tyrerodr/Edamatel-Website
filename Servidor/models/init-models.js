var DataTypes = require("sequelize").DataTypes;
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var usuarios = _usuarios(sequelize, DataTypes);
  // var noticias = _noticias(sequelize, DataTypes);
  // var tipo_noticias = _tipo_noticias(sequelize, DataTypes);
  
  // noticias.belongsTo(autores, { as: "autores", foreignKey: "id"});
  // autores.hasMany(noticias, { as: "noticias", foreignKey: "id_creator"});
  // noticias.belongsTo(autores, { as: "tipo_noticias", foreignKey: "id"});
  // tipo_noticias.hasMany(noticias, { as: "noticias", foreignKey: "id_tipo"});
 

  return {
    usuarios
  };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
