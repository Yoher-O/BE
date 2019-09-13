const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const cursoModel = new Schema({
  nombre: {
    type: String
  },
  nrc: {
    type: String
  },
  hora: {
    type: String
  },
  profesor: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  aula: {
    type: Schema.Types.ObjectId,
    ref: 'room',
  }
});

module.exports = mongoose.model('curso', cursoModel);