const mysql = require('mysql');

const con = mysql.createConnection({
    host: '127.0.0.1:3306',
    user: 'sistema',
    password: 'quarteto123',
    database: 'sos'
});

    con.connect((err) => {
        if (err){
            console.log('Falha ao conectar' + err);
        }

        console.log('Conectado com sucesso');
    });


    