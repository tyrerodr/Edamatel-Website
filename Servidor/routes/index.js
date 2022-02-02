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

 router.get('/articulos', (req, res, next) => { 
  models.articulo.findAll({ 
     
   })
   .then(articulos => {
      res.send(articulos)
   })
   .catch(error => res.status(400).send(error))
});


module.exports = router;
