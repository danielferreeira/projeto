'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produtos', {
    idproduto: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    valor: DataTypes.DECIMAL(18, 2)
  }, {});
  Produto.associate = function(models) {
    // associations can be defined here

    Produto.belongsToMany(models.Pedido, {
      through: 'PedidoProduto',
      as: 'pedidos',
      foreignKey: 'idproduto'
    });

    Produto.belongsTo(models.Vendedor, {
      foreignKey: 'idvendedor'
    });
    
  };
  return Produto;
};