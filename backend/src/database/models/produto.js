'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produtos', {
    idproduto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idvendedor: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Vendedores',
        key: 'idvendedor'
      }
    },
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    valor: DataTypes.DECIMAL(18, 2)
  }, {});
  Produto.associate = function(models) {
    // associations can be defined here

    // Produto.belongsToMany(models.Pedido, {
    //   through: models.PedidoProduto,
    //   foreignKey: 'idproduto'
    // });

    Produto.belongsTo(models.Vendedor, {
      foreignKey: 'idvendedor'
    });

    
  };
  return Produto;
};