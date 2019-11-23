const Produto = require('../database/models').Produtos;

class ProdutoController {
    async buscarProdutos(req, res) {

        const produtos = await Produto.findAll();
        //const produtos = await Produto.findAll({where: { name: 'A Project'}});

        return res.status(200).send(produtos);
    }
}
module.exports = new ProdutoController();
