const model = require('../mdoels/curso.model');
const cursoCtrl = {};

cursoCtrl.getCursos = async (req, res) => {
  const items = await model.find().populate('profesor aula');
  res.json(items)
}

cursoCtrl.createCurso = async (req, res) => {
  const item = new model(req.body);
  const curso = await item.save();
  res.json(curso);
}

cursoCtrl.deleteCurso = async (req, res) => {
  const item = model.deleteOne({
    _id: req.params.id
  })
  res.json(item);
}

cursoCtrl.getCurso = async (req, res) => {
  const item = await model.findOne({
    _id: req.params.id
  });
  res.json(item)
}

cursoCtrl.updateCurso = async (req, res) => {
  await model.updateOne({
    _id: req.params.id
  }, req.body);
  res.json(req.body)
}

cursoCtrl.getCursoByProfesor = async (req, res) => {
  const item = await model.find({
    profesor: req.params.id
  });
  res.json(item)
}

module.exports = cursoCtrl;