var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var solicitudesSchema = new Schema({
	'horario_solicitado' : String,
	'servicio' : String,
	'descripción' : String,
	'id_cliente' : Number
});

module.exports = mongoose.model('solicitudes', solicitudesSchema);
