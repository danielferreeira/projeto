const Pedido = require('../database/models').Pedido;
const PedidoProduto = require('../database/models').PedidoProduto;
const Boleto = require('node-boleto').Boleto;

class PedidoController {
    async finalizarPedido(req, res) {
        const {pedido, pedidoprodutos} = req.body;

        const pedidoResult = await Pedido.create({...pedido});

        if (pedidoResult.dataValues.idpedido != null) {
            pedidoprodutos.map(produto => {
                PedidoProduto.create({
                    idproduto: produto.idproduto,
                    idpedido: pedidoResult.dataValues.idpedido,
                    quantidade: produto.quantidade
                });
            });
            var boleto = new Boleto({
                'banco': "santander",
                'data_emissao': new Date(),
                'data_vencimento': new Date(new Date().getTime() + 5 * 24 * 3600 * 1000),
                'valor': (((Number(pedido.valorTotal) * 100) + (Number(pedido.valorFrete) * 100))),
                'nosso_numero': "1234567",
                'numero_documento': "123123",
                'cedente': "Pagar.me Pagamentos S/A",
                'cedente_cnpj': "18727053000174",
                'agencia': "3978",
                'codigo_cedente': "6404154",
                'carteira': "102",
                'instrucoes': "Instruções de pagamento de boleto"
            });

            boleto.renderHTML(function (html) {
                return res.status(200).send({ boleto: html });
            });

        } else {
            return res.status(400).send({error: "Ocorreu um erro ao salvar o pedido"});
        }
    }

}

module.exports = new PedidoController();
