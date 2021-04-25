const express = require ('express');
const app = express();
app.use(express.json());

app.post('', function (req, res){
    let user_login = req.body.usuario;
    let senha_login = req.body.senha;

    function consultaNomeSenha() {
        con.connection((err) => {
            var usuario = [];
            var senha = [];
            var usuario  = con.query("SELECT nome FROM cliente");
            var senha = con.query("SELECT senha FROM cliente");
        
            for (i=0; i <= usuario.length && i <= senha.length; i++){
                if (user_login == usuario[i]){
                    if (senha_login == senha[i]) {
                        res.end("Seja bem-vindo" + user_login);
                    } else {
                        res.end("Senha incorreto!")
                    }
                } else {
                    res.end ("Usuário não existe!");
                }
            }
        })
    }
});

app.listen(5000);