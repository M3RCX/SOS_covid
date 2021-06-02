const http = require('http');
const express = require('express');
const cadastro = require('./cadastro/src/index');
const login = require('./login/src/index');
const app = express();

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(cadastro, login);


server.listen(port);