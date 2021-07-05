const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });
  mongoose.connect('mongodb://localhost/crud-mongo')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));
  