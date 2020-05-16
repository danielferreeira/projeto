const Produto = require('../database/models').Produto;
const Pessoa = require('../database/models').Pessoa;

const { sequelize } = require("../database/models");

const { QueryTypes } = require('sequelize');

class RelatorioController {
    async relatorioUsuario(req, res) {

        const { id } = req.params;

        const query = `select cliente.nome as nomecliente, produto.idproduto, produto.nome as nomeproduto, pp.quantidade as quantidadeproduto, (pp.quantidade * produto.valor)::numeric as valortotalproduto,	produto.frete,	pedido."createdAt" as datapedido, pedido."valorTotal" as valortotalpedido, (select sum(p.quantidade) from public."PedidoProduto" as p where	p.idpedidoproduto = pp.idpedidoproduto) as totalquantidade from	public."Pedido" as pedido join public."Pessoa" as cliente on cliente.Idpessoa = pedido.Idpessoa join public."PedidoProduto" as pp on pp.idpedido = pedido.idpedido join public."Produto" as produto on produto.idproduto = pp.idproduto where pedido.idpessoa = ${id} order by pedido."createdAt" asc, produto.nome asc`;

        const result = await sequelize.query(query, { type: QueryTypes.SELECT });

        if (!result) {
            return res.status(400).send({ error: 'Ocorreu um erro ao gerar o relatório.' });
        } else {
            return res.status(200).send(result);
        }
    }

    async relatorioArtesao(req, res) {
        const query = 'select(select artesao.nome from public."Pessoa" as artesao where artesao.artesao is true and produto.idpessoa = artesao.Idpessoa ) as nomeartesao, produto.idproduto,	produto.nome, pp.quantidade, (pp.quantidade * produto.valor)::numeric as valortotalproduto, produto.frete, pedido."createdAt" as datapedido, pedido."valorTotal" as valortotalpedido, (select sum(p.quantidade) from public."PedidoProduto" as p	where p.idpedidoproduto = pp.idpedidoproduto) as totalquantidade from public."Pedido" as pedido join public."Pessoa" as cliente on cliente.Idpessoa = pedido.Idpessoa join public."PedidoProduto" as pp on pp.idpedido = pedido.idpedido join public."Produto" as produto on produto.idproduto = pp.idproduto';

        const result = await sequelize.query(query, { type: QueryTypes.SELECT });

        if (!result) {
            return res.status(400).send({ error: 'Ocorreu um erro ao gerar o relatório.' });
        } else {
            return res.status(200).send(result);
        }
    }

}
module.exports = new RelatorioController();
