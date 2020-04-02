import api from '../../../config/axios';

export function buscarProdutos() {
    const produtos = api.get('/produtos')
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            return err
        });

    return produtos;
}