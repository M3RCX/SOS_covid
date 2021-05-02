const db = require('./db');

const cliente = db.sequelize.define('clinica', {
    nome: {
        type: db.Sequelize.STRING
    },
    cnpj: {
        type: db.Sequelize.INT
    },
    email: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.INT
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

module.exports = clinica;