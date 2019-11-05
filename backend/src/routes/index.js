const express = require('express');

const routes = express.Router();

const ProdutoController = require('../controllers/ProdutoController');

routes.get('/produtos', ProdutoController.buscarProdutos);

module.exports = routes;