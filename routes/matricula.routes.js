const express = require('express');
const router = express.Router();
const matricula = require('../controllers/matricula.controller')

router.get('/matriculas', matricula.getMatriculas);
router.post('/matriculas', matricula.createMatricula);
router.get('/matriculas/:id', matricula.getMatriculaByUser);
router.delete('/matriculas/:id', matricula.deleteMatricula);
router.patch('/matriculas/:id', matricula.updateMatricula);


module.exports = router;