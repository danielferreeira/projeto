const express = require('express');

const routes = express.Router();

const ProdutoController = require('../controllers/ProdutoController');
const PessoaController = require('../controllers/PessoaController');
const PedidoController = require('../controllers/PedidoController');
const RelatorioController = require('../controllers/RelatorioController');

routes.get('/produtos', ProdutoController.buscarProdutos);
routes.put('/editarproduto/:idproduto', ProdutoController.editarProduto);
routes.get('/produtosvendedor/:idpessoa', ProdutoController.buscarProdutosVendedor);
routes.get('/produto/:idproduto', ProdutoController.buscarProduto);
routes.post('/criarproduto', ProdutoController.criarProduto);

routes.get('/pessoas', PessoaController.buscarPessoas);
routes.get('/pessoa/:idpessoa', PessoaController.buscarPessoaPeloId);
routes.post('/criarpessoa', PessoaController.criarPessoa);
routes.put('/atualizarpessoa', PessoaController.atualizarPessoa);

routes.get('/relatorios/usuario', RelatorioController.relatorioUsuario);
routes.get('/relatorios/artesao', RelatorioController.relatorioArtesao);

routes.post('/finalizar', PedidoController.finalizarPedido);

routes.post('/login', PessoaController.validarLoginPessoa);

module.exports = routes;