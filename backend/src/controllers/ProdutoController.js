const Produto = require('../database/models').Produtos;

class ProdutoController {
    async buscarProdutos(req, res) {

        const produtos = await Produto.findAll();

        if (!produtos) {
            return res.status(400).send({ error: 'Ocorreu um erro ao buscar os produtos.' });
        } else {
            return res.status(200).send(produtos);
        }

    }

    async criarProduto(req, res) {
        console.log(req.body)

        return res.status(201).send({});
    }
}
module.exports = new ProdutoController();
