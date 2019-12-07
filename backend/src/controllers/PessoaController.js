const Pessoa = require('../database/models').Pessoa;

class PessoaController {
    async buscarPessoas(req, res) {

        const pessoas = await Pessoa.findAll();
        //const pessoas = await Pessoa.findAll({where: { name: 'A Project'}});

        return res.status(200).send(pessoas);
    }

    async validarLoginPessoa(req, res) {
        const { email, senha } = req.body;

        const pessoa = await Pessoa.findOne({
            where: {
                email,
                senha
            }
        })

        if (!pessoa) {
            return res.status(400).send({ error: 'Usuário ou senha inválido.' })
        } else {
            return res.status(200).send(pessoa);
        }

    }
}
module.exports = new PessoaController();
