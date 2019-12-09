import api from '../../../../../config/axios';

export function salvarProduto(dados) {

    const produto = { ...dados, valor: Number(dados.valor) };

    const pessoa = api.post('/criarproduto', produto)
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            return err.response.data
        });

    return pessoa;
}

export function buscarProdutos() {

    const pessoa = api.get('/produtos')
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            return err.response.data
        });

    return pessoa;
}
