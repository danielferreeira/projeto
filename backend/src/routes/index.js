const express = require('express');

const routes = express.Router();

const ProdutoController = require('../controllers/ProdutoController');
const PessoaController = require('../controllers/PessoaController');

routes.get('/produtos', ProdutoController.buscarProdutos);
routes.get('/produtosvendedor/:idpessoa', ProdutoController.buscarProdutosVendedor);
routes.post('/criarproduto', ProdutoController.criarProduto);

routes.get('/pessoas', PessoaController.buscarPessoas);
routes.get('/pessoa/:idpessoa', PessoaController.buscarPessoaPeloId);
routes.post('/criarpessoa', PessoaController.criarPessoa);
routes.put('/atualizarpessoa', PessoaController.atualizarPessoa);

routes.post('/login', PessoaController.validarLoginPessoa);

module.exports = routes;