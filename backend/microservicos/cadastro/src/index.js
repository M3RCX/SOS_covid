const express = require('express');
const app = express();
const cliente = require("./cliente");
const clinica = require("./clinica");
const sequelize = require('../../db');

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));


app.use(
  (req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');

    next();
  });


//cadastro de clientes no banco
app.get('/cadastro-cliente', function (req, res) { //caminho do formulário de cadastro de usuarios
  res.render('cadastro-cliente');
});

app.get('/cadastro-clinica', function (req, res) { //caminho do formulário de cadastro de clinicas
  res.render('cadastro-clinica');
});

app.post('/cliente-cadastrado', function (req, res) {
  console.log(cliente);
  cliente.create({
    nome: req.body.nome,
    cpf: req.body.cpf,
    email: req.body.email,
    telefone: req.body.telefone,
    cep: req.body.cep,
    rua: req.body.rua,
    numero: req.body.numero,
    bairro: req.body.bairro,
    senha: req.body.senha
  }).then(function () {
    // res.redirect('/'); //Redireciona o usuário cadastrado para a tela inicial
    res.status(200).json({
      mensagem: "Tudo Ok",
    });
    console.log("Usuário cadastrado");
  }).catch(function (erro) {
    console.log("Não foi possível cadastrar o usuário " + erro);
  });
});

app.post('/clinica-cadastrada', function (req, res) {
  clinica.create({
    nome: req.body.nome,
    cnpj: req.body.cnpj,
    email: req.body.email,
    telefone: req.body.telefone,
    cep: req.body.cep,
    rua: req.body.rua,
    numero: req.body.numero,
    bairro: req.body.bairro,
    senha: req.body.senha
  }).then(function () {
    res.redirect('/home'); //Redireciona o clínica cadastrada para a tela inicial
    console.log("Clínica Cadastrada");
  }).catch(function (erro) {
    console.log("Não foi possível cadastrar a clínica" + erro);
  });
});

app.listen(1000);