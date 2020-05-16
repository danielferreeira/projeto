import api from '../../../config/axios';

export function finalizarPedido(pagarFrete, values) {
    const data = {
        pedido: {
            idpessoa: localStorage.getItem('idpessoa'),
            descricao: `Pedido finalizado`,
            valorTotal: values.cartTotal,
            valorFrete: pagarFrete ? values.cart.map((produto) => produto.frete).reduce((acc, curr) => acc + curr) : 0
        },
        pedidoprodutos: [
            ...values.cart.map(produto => {
                return {
                    idproduto: produto.idproduto,
                    quantidade: produto.count
                }
            })
        ],
    };

    return api.post('/finalizar', data)
        .then(resp => {
            return resp.data.boleto;
        })
        .catch(err => {
            return err
        });
}