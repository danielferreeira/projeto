import api from '../../../../../config/axios';

export function salvarProduto(dados) {

    const produto = { ...dados, valor: Number(dados.valor) };

    const pessoa = api.post('/criarproduto', produto)
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            return err
        });

    return pessoa;
}

export function editarProduto(dados) {

    const produto = { ...dados, valor: Number(dados.valor) };

    const pessoa = api.put(`/editarproduto/${dados.idproduto}`, produto)
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            return err
        });

    return pessoa;
}

export function buscarProdutosVendedor() {
    const idpessoa = localStorage.getItem('idpessoa');

    const pessoa = api.get(`/produtosvendedor/${idpessoa}`)
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            return err
        });

    return pessoa;
}

export function carregarInformacoesUsuarioLogado() {
    const idpessoa = localStorage.getItem('idpessoa');

    const pessoa = api.get(`/pessoa/${idpessoa}`)
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            return err
        });

    return pessoa;
}


export function atualizarDadosUsuario(dados) {

    const pessoa = api.put('/atualizarpessoa', dados)
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            return err
        });

    return pessoa;
}