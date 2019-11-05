const Produto = require('../database/models').Produtos;

class ProdutoController {
    async buscarProdutos(req, res) {

        const produtos = await Produto.findAll();

        return res.status(200).send(produtos);
    }
}
module.exports = new ProdutoController();
