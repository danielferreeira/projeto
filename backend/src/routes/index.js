const express = require('express');

const routes = express.Router();

const ProdutoController = require('../controllers/ProdutoController');
const PessoaController = require('../controllers/PessoaController');

routes.get('/produtos', ProdutoController.buscarProdutos);
routes.post('/criarproduto', ProdutoController.criarProduto);

routes.get('/pessoas', PessoaController.buscarPessoas);
routes.post('/criarpessoa', PessoaController.criarPessoa);

routes.post('/login', PessoaController.validarLoginPessoa);

module.exports = routes;