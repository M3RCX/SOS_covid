const Sequelize = require("sequelize");

const sequelize = new Sequelize('sos', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',//indicando qual é o banco de dados nesse caso é o MySQL.
    define: {
        timestamps: false
    }
});

sequelize.authenticate().then(function () {
  console.log("Conexão realizada");
}).catch(function (err) {
  console.log("Erro ao conectar com o banco" + err)
});


module.exports = {
  //Sequelize inicia o serviço
  Sequelize: Sequelize,
  //Sequelize é apenas a variável de acesso
  sequelize: sequelize
}