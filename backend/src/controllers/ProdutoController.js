const Produto = require('../database/models').Produto;
const Pessoa = require('../database/models').Pessoa;

class ProdutoController {
    async buscarProdutosVendedor(req, res) {

        const produtos = await Produto.findAll({ where: { idpessoa: req.params.idpessoa } });

        if (!produtos) {
            return res.status(400).send({ error: 'Ocorreu um erro ao buscar os produtos.' });
        } else {
            return res.status(200).send(produtos);
        }

    }

    async buscarProdutos(req, res) {

        const produtos = await Produto.findAll({
            include: [{
                model: Pessoa
            }]
        })

        if (!produtos) {
            return res.status(400).send({ error: 'Ocorreu um erro ao buscar os produtos.' });
        } else {
            return res.status(200).send(produtos);
        }

    }

    async criarProduto(req, res) {
        const dados = req.body;

        const produto = await Produto.create(dados);

        if (!produto) {
            return res.status(400).send({ error: 'Ocorreu um erro ao salvar o produto.' });
        } else {
            return res.status(201).send(produto);
        }
    }
}
module.exports = new ProdutoController();
