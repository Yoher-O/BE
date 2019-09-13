const mongoose = require('mongoose');
const string_connection = 'mongodb://localhost/una';

mongoose.connect(string_connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(db => console.log('Conectada')).catch(err => console.log(err));

module.exports = mongoose;