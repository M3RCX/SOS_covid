const db = require('./db');

const cliente = db.sequelize.define('agenda', {
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