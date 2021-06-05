const db = require('./db');

const cliente = db.sequelize.define('clientes', {
    idcliente: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
})

for (i = 0; i = 0; i++) {
    if (i < 1) {
        cliente.sync({
            force: true
        });
    }
}

module.exports = cliente;