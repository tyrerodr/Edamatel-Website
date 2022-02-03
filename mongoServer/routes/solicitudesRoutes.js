var express = require('express');
var router = express.Router();
var solicitudesController = require('../controllers/solicitudesController.js');


router.get('/solicitudes/:id', solicitudesController.solicitudesporid);
/*
 * GET
 */
router.get('/lista', solicitudesController.list);

/*
 * GET
 */
router.get('/:id', solicitudesController.show);

/*
 * POST
 */
router.post('/', solicitudesController.create);

/*
 * PUT
 */
router.put('/:id', solicitudesController.update);

/*
 * DELETE
 */
router.delete('/:id', solicitudesController.remove);

module.exports = router;
