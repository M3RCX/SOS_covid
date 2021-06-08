const express = require('express');
const { sequelize } = require('../../db');
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
        res.status(200).json({
        mensagem: "Tudo Ok",
      });
        console.log("Agendado com sucesso!");
    }).catch(function (erro) {
        console.log("Falha ao agendar" + erro);
    });
});

//get
app.get('/agendamento', function(req, res) {
    sequelize.sync()
    .then(function() {
      return agenda.findAll();
    })
    .then(function(agendamento) {
      res.json(agendamento);
       console.log(JSON.stringify(agendamento));
     })
  });

app.listen(1200);