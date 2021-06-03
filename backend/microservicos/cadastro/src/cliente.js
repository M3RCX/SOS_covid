const db = require('./db');

const cliente = db.sequelize.define('cliente', {
    idcliente: {
        type: db.Sequelize.INTEGER, autoIncrement: true, primaryKey: true
    },
    nome: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    },
    cep: {
        type: db.Sequelize.STRING
    },
    rua: {
        type: db.Sequelize.STRING
    },
    numero: {
        type: db.Sequelize.STRING
    },
    bairro: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }
});

module.exports = cliente;