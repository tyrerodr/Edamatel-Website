var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 

// get autores
router.get('/usuarios', (req, res, next) => { 
   models.usuarios.findAll({ 
      attributes: { exclude: ["updatedAt"] }
    })
    .then(usuarios => {
       res.send(usuarios)
    })
    .catch(error => res.status(400).send(error))
 });

 // get autores id
// router.get('/autores/:autorId', (req, res, next) => {
//    models.autores.findAll({
//       attributes: { exclude: ["updatedAt"] },
//       where: {
//       id: req.params.autorId
//    }
//       }).then(autores => {
//       res.send(autores)
//    })
//       .catch(error => res.status(400).send(error))
//    });

 //get noticias
// router.get('/noticias', (req, res, next) => {
//    models.noticias.findAll({ 
//       attributes: { exclude: ["updatedAt","id"] }
//     })
//     .then(noticias => {
//        res.send(noticias)
//     })
//     .catch(error => res.status(400).send(error))
//  });

 //get tipo_noticias
// router.get('/tipo_noticias', (req, res, next) => {
//    models.tipo_noticias.findAll({ 
//       attributes: { exclude: ["updatedAt"] }
//     })
//     .then(tipo_noticias => {
//        res.send(tipo_noticias)
//     })
//     .catch(error => res.status(400).send(error))
//  });
module.exports = router;
