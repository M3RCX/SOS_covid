const db = require('./db');

const agenda = db.sequelize.define('agenda'/*Nome da tabela de dados*/, {
    dia: {
        type: db.Sequelize.INT
    },
    mes: {
        type: db.Sequelize.STRING
    },
    ano: {
        type: db.Sequelize.INT
    },
    semana: {
        type: db.Sequelize.STRING
    },
    hora: {
        type: db.Sequelize.STRING
    }
});

module.exports = agenda;