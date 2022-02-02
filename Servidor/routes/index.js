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


/* POST articulos crear */
router.post('/articulos', (req, res, next) => {
  const cliente= models.articulo.create(req.body);
  res.json(cliente);
  

});

/* PUT articulos  actu*/
router.put('/articulos/:articuloId', (req, res, next) => {
    models.articulo.update(req.body,{
      where: {id_articulo: req.params.articuloId}
    });
    res.json({success: "modificado"}).catch(error => res.status(400).send(error))
});

/* DELETE articulos */
router.delete('/articulos/:articuloId', (req, res, next) => {
  models.articulo.destroy({
    where: {id_articulo: req.params.articuloId}
  });
  res.json({success: "borrado"}).catch(error => res.status(400).send(error))
});


module.exports = router;
