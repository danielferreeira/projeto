'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vendedor = sequelize.define('Vendedor', {
    idvendedor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    razaosocial: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    telefone: DataTypes.INTEGER
  }, {});
  Vendedor.associate = function(models) {
    // associations can be defined here
    Vendedor.hasMany(models.Produtos, {
      foreignKey: 'idproduto',
    })

  };
  return Vendedor;
};
