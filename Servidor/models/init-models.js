var DataTypes = require("sequelize").DataTypes;
var _articulo = require("./articulo");
var _articulos_compra = require("./articulos_compra");
var _compra = require("./compra");
var _proovedor = require("./proovedor");
var _servicio = require("./servicio");
var _solicitud = require("./solicitud");
var _tipos_pago = require("./tipos_pago");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var articulo = _articulo(sequelize, DataTypes);
  var articulos_compra = _articulos_compra(sequelize, DataTypes);
  var compra = _compra(sequelize, DataTypes);
  var proovedor = _proovedor(sequelize, DataTypes);
  var servicio = _servicio(sequelize, DataTypes);
  var solicitud = _solicitud(sequelize, DataTypes);
  var tipos_pago = _tipos_pago(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  articulos_compra.belongsTo(articulo, { as: "id_articulo_articulo", foreignKey: "id_articulo"});
  articulo.hasMany(articulos_compra, { as: "articulos_compras", foreignKey: "id_articulo"});
  proovedor.belongsTo(articulo, { as: "id_articulo_articulo", foreignKey: "id_articulo"});
  articulo.hasMany(proovedor, { as: "proovedors", foreignKey: "id_articulo"});
  articulos_compra.belongsTo(compra, { as: "id_compra_compra", foreignKey: "id_compra"});
  compra.hasMany(articulos_compra, { as: "articulos_compras", foreignKey: "id_compra"});
  servicio.belongsTo(solicitud, { as: "id_servicioSolicitado_solicitud", foreignKey: "id_servicioSolicitado"});
  solicitud.hasMany(servicio, { as: "servicios", foreignKey: "id_servicioSolicitado"});
  compra.belongsTo(tipos_pago, { as: "id_tipo_pago_tipos_pago", foreignKey: "id_tipo_pago"});
  tipos_pago.hasMany(compra, { as: "compras", foreignKey: "id_tipo_pago"});
  articulo.belongsTo(usuario, { as: "id_administrador_usuario", foreignKey: "id_administrador"});
  usuario.hasMany(articulo, { as: "articulos", foreignKey: "id_administrador"});
  compra.belongsTo(usuario, { as: "id_cliente_usuario", foreignKey: "id_cliente"});
  usuario.hasMany(compra, { as: "compras", foreignKey: "id_cliente"});
  servicio.belongsTo(usuario, { as: "id_administrador_usuario", foreignKey: "id_administrador"});
  usuario.hasMany(servicio, { as: "servicios", foreignKey: "id_administrador"});
  solicitud.belongsTo(usuario, { as: "id_cliente_usuario", foreignKey: "id_cliente"});
  usuario.hasMany(solicitud, { as: "solicituds", foreignKey: "id_cliente"});

  return {
    articulo,
    articulos_compra,
    compra,
    proovedor,
    servicio,
    solicitud,
    tipos_pago,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
