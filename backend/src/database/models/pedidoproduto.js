'use strict';
module.exports = (sequelize, DataTypes) => {
  const PedidoProduto = sequelize.define('PedidoProduto', {
    idpedidoproduto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idproduto: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Produtos',
        key: 'idproduto'
      }
    },
    idpedido: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Pedidos',
        key: 'idpedido'
      }
    },
    quantidade: DataTypes.INTEGER
  }, {});
  PedidoProduto.associate = function(models) {

  };
  return PedidoProduto;
};