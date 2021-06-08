const db = require('../../db');

const agenda = db.sequelize.define('agendamentos'/*Nome da tabela de dados*/, {
    idagendamento: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    name: {
        type: db.Sequelize.STRING
    },
    data: {
        type: db.Sequelize.STRING
    },
    street: {
        type: db.Sequelize.STRING
    },
});

for (i = 0; i = 0; i++) {
    if (i < 1) {
        agenda.sync({
            force: true
        });
    }
}

module.exports = agenda;