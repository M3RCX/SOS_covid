const express = require('express');
const cliente = require('../../cadastro/src/index');
const app = express();
app.use(express.json());



app.post('/login', function (req, res) {
    let cpf = req.body.cpf; //CPF vindo do formulário de login
    let senha = req.body.senha; //Senha vinda do formulário de login

    
        cliente.findAll(cpf, senha).then((clientes) => {
            for (int = 0; i < clientes.lenght; i++) {
                if (cpf == clientes[i].cpf && senha == clientes[i].senha) {
                    console.log('Bem-Vindo');
                } else {
                    res.end("Usuário ou senha não existe")
                }
            }
        })
});

app.listen(5000);