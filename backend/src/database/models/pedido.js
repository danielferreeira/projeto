'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    idpedido: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idpessoa: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Pessoas',
        key: 'idpessoa'
      }
    },
    descricao: DataTypes.STRING,
    lancamento: DataTypes.DATE,
    baixa: DataTypes.DATE
  }, {});
  Pedido.associate = function(models) {

    Pedido.belongsTo(models.Pessoa, {
      foreignKey: 'idpessoa'
    });

    Pedido.belongsToMany(models.Produto, {
      through: 'PedidoProduto',
      as: 'produtos',
      foreignKey: 'idpedido'
    });
  };
  return Pedido;
};