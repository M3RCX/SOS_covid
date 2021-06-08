const db = require('./db');

const agenda = db.sequelize.define('agenda'/*Nome da tabela de dados*/, {
    dia: {
        type: db.Sequelize.STRING
    },
    name: {
        type: db.Sequelize.STRING
    },
    street: {
        type: db.Sequelize.STRING
    },
});

module.exports = agenda;