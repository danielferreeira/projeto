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
        model: 'Produto',
        key: 'idproduto'
      }
    },
    idpedido: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Pedido',
        key: 'idpedido'
      }
    },
    quantidade: DataTypes.INTEGER
  }, {
    freezeTableName: true
  });
  PedidoProduto.associate = function(models) {

  };
  return PedidoProduto;
};