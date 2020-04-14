'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    idpedido: {
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
    descricao: DataTypes.STRING,
    valorTotal: DataTypes.DECIMAL(18, 2),
    lancamento: DataTypes.DATE,
    baixa: DataTypes.DATE
  }, {
    freezeTableName: true
  });
  Pedido.associate = function(models) {

    Pedido.belongsTo(models.Pessoa, {
      foreignKey: 'idpessoa'
    });

    Pedido.hasMany(models.Produto, {
      foreignKey: 'idproduto'
    });
  };
  return Pedido;
};