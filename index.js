const express = require('express');
const morgan = require('morgan');
const {
  mongoose
} = require('./connection');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/user.routes'));
app.use(require('./routes/room.routes'));
app.use(require('./routes/curso.routes'));
app.use(require('./routes/matricula.routes'));

app.set('port', process.env.PORT || 3000);

app.listen(3000, () => {
  console.log('Server is on');
})