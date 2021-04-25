const express = require ('express');
const app = express();
app.use(express.json());


app.post('', function (req, res) {
    let nome = req.body.nome; //nome que virá do corpo do json quando for enviado o formulário de cadastro.
    let cpf = req.body.cpf; //cpf que virá do corpo do json quando for enviado o formulário de cadastro.
    let email = req.body.email; //email que virá do corpo do json quando for enviado o formulário de cadastro.
    let telefone = req.body.telefone; //telefona que virá do corpo do json quando for enviado o formulário de cadastro.
    let cep = req.body.cep; //cep que virá do corpo do json quando for enviado o formulário de cadastro.
    let rua = req.body.rua; //rua que virá do corpo do json quando for enviado o formulário de cadastro.
    let numero = req.body.numero; //numero que virá do corpo do json quando for enviado o formulário de cadastro.
    let bairro = req.body.bairro; //bairro que virá do corpo do json quando for enviado o formulário de cadastro.
    let senha = req.body.senha; //senha que virá do corpo do json quando for enviado o formulário de cadastro.
    
    function insertDados(){
        con.connection((err) => {
            con.query("insert into cliente (nome, cpf, email, telefone, cep, rua, numero, bairro, senha)")
        })
    }



});
app.listen(4000);