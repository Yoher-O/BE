const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const matriculaModel = new Schema({
  curso: {
    type: Schema.Types.ObjectId,
    ref: 'curso',
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  }
});

module.exports = mongoose.model('matricula', matriculaModel);