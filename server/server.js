const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./config/config');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get('/usuario', function(req, resp){
  resp.json('hello world');
});

app.post('/usuario', function(req, resp){
  let body = req.body;

  resp.json({
    persona: body
  });
});

app.put('/usuario/:id', function(req, resp){
  let id = req.params.id;
  resp.json({
    id
  });
});

app.delete('/usuario', function(req, resp){
  resp.json('delete world');
});


app.listen(process.env.PORT, () => {
  console.log('Escuchando puerto : ', process.env.PORT );
});
