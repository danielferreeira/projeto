'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define('Pessoa', {
    idpessoa: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: DataTypes.STRING,
    artesao: DataTypes.BOOLEAN,
    documento: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      required: true,
    },
    senha: {
      type: DataTypes.STRING,
      required: true,
      select: false
    }
  }, {});
  Pessoa.associate = function(models) {
    // associations can be defined here
  };
  return Pessoa;
};