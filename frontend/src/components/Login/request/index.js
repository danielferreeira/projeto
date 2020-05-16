import api from '../../../config/axios';

export function fazerLogin(email, senha, onSuccess, onError) {
    const pessoa = api.post('/login', { email, senha })
        .then(resp => {
            onSuccess && onSuccess(resp.data);
        })
        .catch(err => {
            onError && onError(err);
        });

    return pessoa;
}