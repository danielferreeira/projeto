import api from '../../../config/axios';

export function finalizarPedido(values) {

    const data = {
        pedido: {
            idpessoa: localStorage.getItem('idpessoa'),
            descricao: `Pedido finalizado`,
            valorTotal: values.cartTotal
        },
        pedidoprodutos: [
            ...values.cart.map(produto => {
                return {
                    idproduto: produto.idproduto,
                    quantidade: produto.count
                }
            })
        ]
    };

    return api.post('/finalizar', data)
        .then(resp => {
            return resp.data.boleto;
        })
        .catch(err => {
            return err
        });
}