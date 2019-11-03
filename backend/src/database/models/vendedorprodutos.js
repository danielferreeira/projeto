'use strict';
module.exports = (sequelize, DataTypes) => {
  const VendedorProdutos = sequelize.define('VendedorProdutos', {
    idvendedorproduto: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idproduto: DataTypes.INTEGER,
    idvendedor: DataTypes.INTEGER
  }, {});
  VendedorProdutos.associate = function(models) {
    // associations can be defined here
  };
  return VendedorProdutos;
};