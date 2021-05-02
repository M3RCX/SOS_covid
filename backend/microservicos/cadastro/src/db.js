const Sequelize = require("sequelize");

const sequelize = new Sequelize('sos', 'cliente', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});


sequelize.authenticate().then(function(){
    console.log("Conexão realizada com sucesso!");    
}).catch(function(err){
    console.log("Erro ao conectar com o BD" + err)
});


module.exports = {
    //Sequelize inicia o serviço
    Sequelize: Sequelize,
    //Sequelize é apenas a variável de acesso
    sequelize: sequelize
}