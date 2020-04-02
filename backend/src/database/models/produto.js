'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    idproduto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idpessoa: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Pessoa',
        key: 'idpessoa'
      }
    },
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    valor: DataTypes.DECIMAL(18, 2),
    frete: DataTypes.DECIMAL(18, 2),
    imagem: DataTypes.TEXT
  }, {
    freezeTableName: true
  });
  Produto.associate = function (models) {
    // associations can be defined here

    // Produto.belongsToMany(models.Pedido, {
    //   through: models.PedidoProduto,
    //   foreignKey: 'idproduto'
    // });

    Produto.belongsTo(models.Pessoa, {
      foreignKey: 'idpessoa'
    });


  };
  return Produto;
};