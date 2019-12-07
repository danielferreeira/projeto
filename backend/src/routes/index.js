const express = require('express');

const routes = express.Router();

const ProdutoController = require('../controllers/ProdutoController');
const PessoaController = require('../controllers/PessoaController');
const VendedorController = require('../controllers/VendedorController');

routes.get('/produtos', ProdutoController.buscarProdutos);
routes.post('/produto', ProdutoController.criarProduto);

routes.get('/pessoas', PessoaController.buscarPessoas);
routes.post('/login', PessoaController.validarLoginPessoa);

routes.get('/vendedores', VendedorController.buscarVendedores);

module.exports = routes;