import api from '../../../config/axios';

export function fazerLogin(email, senha) {
    const pessoa = api.post('/login', { email, senha })
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            return err.response.data
        });

    return pessoa;
}