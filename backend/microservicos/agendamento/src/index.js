const express = require('express');
const app = express();
app.use(express.json());



app.post('/agendamento', function (req, res) {
    cliente.create({
        dia: req.body.dia,
        mes: req.body.mes,
        ano: req.body.ano,
        semana: req.body.semana,
        hora: req.body.hora,
    }).then(function () {
        console.log("Agendado com sucesso!");
    }).catch(function (erro) {
        console.log("Falha ao agendar" + erro);
    });
});