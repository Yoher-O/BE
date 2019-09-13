const model = require('../mdoels/user.model');
const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
  const items = await model.find();
  res.json(items)
}

userCtrl.createUser = async (req, res) => {
  const item = new model(req.body);
  const user = await item.save();
  res.json(user);
}

userCtrl.deleteUser = async (req, res) => {
  const item = model.deleteOne({
    _id: req.params.id
  })
  res.json(item);
}

userCtrl.getUser = async (req, res) => {
  const item = await model.findOne({
    _id: req.params.id
  });
  res.json(item)
}

userCtrl.updateUser = async (req, res) => {
  await model.updateOne({
    _id: req.params.id
  }, req.body);
  res.json(req.body)
}

module.exports = userCtrl;