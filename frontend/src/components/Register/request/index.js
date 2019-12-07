import api from '../../../config/axios';

export function criarConta(dados) {
    const pessoa = api.post('/criarpessoa', dados)
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            return err.response.data
        });

    return pessoa;
}