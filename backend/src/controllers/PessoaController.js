const Pessoa = require('../database/models').Pessoas;

class PessoaController {
    async buscarPessoas(req, res) {

        const pessoas = await Pessoa.findAll();
        //const pessoas = await Pessoa.findAll({where: { name: 'A Project'}});

        return res.status(200).send(pessoas);
    }
}
module.exports = new PessoaController();
