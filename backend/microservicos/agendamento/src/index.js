const express = require('express');
const agenda = require('./agenda');
const app = express();
app.use(express.json());

app.use(
    (req, res, next) => {
  
      res.setHeader('Access-Control-Allow-Origin', "*");
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  
      next();
    });

app.post('/agendamento', function (req, res) {
    agenda.create({
        data: req.body.data,
        street: req.body.street,
        name: req.body.name
    }).then(function () {
        res.redirect('/');
        console.log("Agendado com sucesso!");
    }).catch(function (erro) {
        console.log("Falha ao agendar" + erro);
    });
});

//get
app.get('/agendamento', function (req, res) { //caminho do formulário de cadastro de usuarios
    agenda.findAll().then((agendamento) => {
        res.status(200).jsonp({
           
            agenda:agendamento 
        })
        
        console.log("alou");
    })
  });

app.listen(1200);