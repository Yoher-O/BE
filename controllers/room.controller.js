const model = require('../models/room.model');
const roomCtrl = {};

roomCtrl.getRooms = async (req, res) => {
  const items = await model.find();
  res.json(items)
}

roomCtrl.createRoom = async (req, res) => {
  const item = new model(req.body);
  const room = await item.save();
  res.json(room);
}

roomCtrl.deleteRoom = async (req, res) => {
  const item = model.deleteOne({
    _id: req.params.id
  })
  res.json(item);
}

roomCtrl.getRoom = async (req, res) => {
  const item = await model.findOne({
    _id: req.params.id
  });
  res.json(item)
}

roomCtrl.updateRoom = async (req, res) => {
  await model.updateOne({
    _id: req.params.id
  }, req.body);
  res.json(req.body)
}

module.exports = roomCtrl;