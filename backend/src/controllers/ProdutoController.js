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

    async buscarProduto(req, res) {
        const produto = await Produto.findOne({ where: { idproduto: req.params.idproduto } });

        if (!produto) {
            return res.status(400).send({ error: 'Ocorreu um erro ao buscar os produtos.' });
        } else {
            return res.status(200).send(produto);
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

    async editarProduto(req, res) {

        const produto = await Produto.update({ ...req.body }, { where: { idproduto: req.params.idproduto } });

        if (!produto) {
            return res.status(400).send({ error: 'Ocorreu um erro salvar o registro.' })
        } else {
            return res.status(200).send(produto);
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
