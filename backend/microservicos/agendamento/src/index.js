const express = require('express');
const app = express();
app.use(express.json());



app.post('/agendamento', function (req, res) {
    cliente.create({
        dia: req.body.dia,
        street: req.body.street,
        name: req.body.name
    }).then(function () {
        console.log("Agendado com sucesso!");
    }).catch(function (erro) {
        console.log("Falha ao agendar" + erro);
    });
});

app.listen(1222);