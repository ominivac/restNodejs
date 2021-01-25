const express = require('express');
const app = express();
//add referencia para rota de produtos
const rotaProdutos = require('./routes/produtos');

app.use('/produtos', rotaProdutos);

module.exports = app;
