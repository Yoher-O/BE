const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const roomsModel = new Schema({
  numero: {
    type: String
  },
});

module.exports = mongoose.model('room', roomsModel);