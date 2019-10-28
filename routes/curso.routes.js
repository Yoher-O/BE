const express = require('express');
const router = express.Router();
const curso = require('../controllers/curso.controller')

router.get('/cursos', curso.getCursos);
router.post('/cursos', curso.createCurso);
router.get('/cursos/:id', curso.getCurso);
router.delete('/cursos:id', curso.deleteCurso);
router.patch('/cursos/:id', curso.updateCurso);
router.get('/cursos/profesor/:id', curso.getCursoByProfesor);


module.exports = router;