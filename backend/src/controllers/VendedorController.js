const Vendedor = require('../database/models').Vendedores;

class VendedorController {
    async buscarVendedores(req, res) {

        const vendedores = await Vendedor.findAll();
        //const vendedores = await Vendedor.findAll({where: { name: 'A Project'}});

        return res.status(200).send(vendedores);
    }
}
module.exports = new VendedorController();
