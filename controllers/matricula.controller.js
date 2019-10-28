const model = require('../models/Matricula.model');
const matriculaCtrl = {};

matriculaCtrl.getMatriculas = async (req, res) => {
  const items = await model.find();
  res.json(items)
}

matriculaCtrl.createMatricula = async (req, res) => {
  const item = new model(req.body);
  const matricula = await item.save();
  res.json(matricula);
}

matriculaCtrl.deleteMatricula = async (req, res) => {
  const item = await model.deleteOne({
    _id: req.params.id
  })
  res.json(item);
}

matriculaCtrl.getMatriculaByUser = async (req, res) => {
  let item = await model.find({
    estudiante: req.params.id
  }).populate({
    path: 'curso'
  }).populate({
    path: 'curso',
    populate: {
      path: 'profesor'
    }
  });

  res.json(item)
}

matriculaCtrl.updateMatricula = async (req, res) => {
  await model.updateOne({
    _id: req.params.id
  }, req.body);
  res.json(req.body)
}

module.exports = matriculaCtrl;