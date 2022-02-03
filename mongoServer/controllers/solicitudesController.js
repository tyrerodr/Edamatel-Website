var SolicitudesModel = require('../models/solicitudesModel.js');

/**
 * solicitudesController.js
 *
 * @description :: Server-side logic for managing solicitudess.
 */
module.exports = {
    solicitudesporid: function (req, res) {
        var id = req.params.id;
        console.log(id)
        SolicitudesModel.find({id_cliente: id}, function (err, facturasantiguas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting facturasantiguas.',
                    error: err
                });
            }

            if (!facturasantiguas) {
                return res.status(404).json({
                    message: 'No such facturasantiguas'
                });
            }

            return res.json(facturasantiguas);
        });
    },
    /**
     * solicitudesController.list()
     */
    list: function (req, res) {
        SolicitudesModel.find(function (err, solicitudess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting solicitudes.',
                    error: err
                });
            }

            return res.json(solicitudess);
        });
    },

    /**
     * solicitudesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        SolicitudesModel.findOne({_id: id}, function (err, solicitudes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting solicitudes.',
                    error: err
                });
            }

            if (!solicitudes) {
                return res.status(404).json({
                    message: 'No such solicitudes'
                });
            }

            return res.json(solicitudes);
        });
    },

    /**
     * solicitudesController.create()
     */
    create: function (req, res) {
        var solicitudes = new SolicitudesModel({
			horario_solicitado : req.body.horario_solicitado,
			servicio : req.body.servicio,
			descripción : req.body.descripción,
			id_cliente : req.body.id_cliente
        });

        solicitudes.save(function (err, solicitudes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating solicitudes',
                    error: err
                });
            }

            return res.status(201).json(solicitudes);
        });
    },

    /**
     * solicitudesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        SolicitudesModel.findOne({_id: id}, function (err, solicitudes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting solicitudes',
                    error: err
                });
            }

            if (!solicitudes) {
                return res.status(404).json({
                    message: 'No such solicitudes'
                });
            }

            solicitudes.horario_solicitado = req.body.horario_solicitado ? req.body.horario_solicitado : solicitudes.horario_solicitado;
			solicitudes.servicio = req.body.servicio ? req.body.servicio : solicitudes.servicio;
			solicitudes.descripción = req.body.descripción ? req.body.descripción : solicitudes.descripción;
			solicitudes.id_cliente = req.body.id_cliente ? req.body.id_cliente : solicitudes.id_cliente;
			
            solicitudes.save(function (err, solicitudes) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating solicitudes.',
                        error: err
                    });
                }

                return res.json(solicitudes);
            });
        });
    },

    /**
     * solicitudesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        SolicitudesModel.findByIdAndRemove(id, function (err, solicitudes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the solicitudes.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
