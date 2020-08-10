const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./config/config');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(require('./routes/usuario'));

const options = {
  useNewUrlParser : true,
  useUnifiedTopology : true,
  useCreateIndex : true,
  useFindAndModify: false
}
mongoose.connect(process.env.URL_DB, options, (err, res)=>{
  if (err)
    throw err;
  else
    console.log('Base de datos online');

});

app.listen(process.env.PORT, () => {
  console.log('Escuchando puerto : ', process.env.PORT );
});
