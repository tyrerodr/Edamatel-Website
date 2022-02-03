var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 

// get usuarios
router.get('/usuarios', (req, res, next) => { 
   models.usuario.findAll({ 
    
    })
    .then(usuarios => {
       res.send(usuarios)
    })
    .catch(error => res.status(400).send(error))
 });


 //get articulos
 router.get('/articulos', (req, res, next) => { 
  models.articulo.findAll({ 
     
   })
   .then(articulos => {
      res.send(articulos)
   })
   .catch(error => res.status(400).send(error))
});

//get servicio
router.get('/solicitudes', (req, res, next) => { 
  models.solicitud.findAll({ 
     
   })
   .then(solicitudes => {
      res.send(solicitudes)
   })
   .catch(error => res.status(400).send(error))
});


/* POST usuarios crear */
router.post('/usuarios', (req, res, next) => {
  const usuario= models.usuario.create(req.body);
  res.json(usuario);
});


/* POST articulos crear */
router.post('/articulos', (req, res, next) => {
  const cliente= models.articulo.create(req.body);
  res.json(cliente);
});

/* PUT usuarios actu*/
router.put('/usuarios/:usuarioId', (req, res, next) => {
  models.usuario.update(req.body,{
    where: {id_usuario: req.params.usuarioId}
  });
  res.json({success: "modificado"}).catch(error => res.status(400).send(error))
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


//get carrito
router.get('/carrito/:userId', (req, res, next) => { 
  models.articulos_compra.findAll({ 
    where: {id_usuario: req.params.userId}
   })
   .then(articulos => {
      res.send(articulos)
   })
   .catch(error => res.status(400).send(error))
});

 //get articulos
 router.get('/articulos/:usuarioId', (req, res, next) => { 
  models.articulo.findAll({ 
    where: {
      id_articulo: req.params.usuarioId
    }
   })
   .then(articulos => {
      res.send(articulos)
   })
   .catch(error => res.status(400).send(error))
});
//get articulo por id
router.get('/articulo/:articuloId', (req, res, next) => {
  models.articulo.findAll({
    attributes: { exclude: ["updatedAt"]  },
    where: {
      id_articulo: req.params.articuloId
    }
}).then(autores => {
  res.send(autores)
})
.catch(error => res.status(400).send(error))
});

//put en el carrito
router.post('/carrito', (req, res, next) => {
 
  models.articulos_compra.create(req.body).then(response => console.log("exito"))
  .catch(error =>{console.log(error);res.status(400).send(error)} ) // TypeError: failed to fetch (the text may vary);
  
  
});

/* DELETE carrito */
router.delete('/carrito/:articuloId/:usuarioId', (req, res, next) => {
  models.articulos_compra.destroy({
    where: {id_articulo: req.params.articuloId ,id_usuario: req.params.usuarioId}
  });
  res.json({success: "borrado"}).catch(error => res.status(400).send(error))
});



module.exports = router;
