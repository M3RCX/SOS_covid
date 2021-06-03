const http = require('http');
const express = require('express');
const cadastro = require('./cadastro/src/index');
const login = require('./login/src/index');
const app = express();

const port = 3000;
const port_lg = 4000;
app.set('port', port);
app.set('port', port_lg);

const server = http.createServer(cadastro);
const server_lg = http.createServer(login);


server.listen(port);
server_lg.listen(port_lg);