const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const userModel = new Schema({
  nombre: {
    type: String
  },
  dni: {
    type: String
  },
  clave: {
    type: String
  },
  tipo: {
    type: String,
    enum: ['Profesor', 'Estudiante']
  }
});

module.exports = mongoose.model('user', userModel);