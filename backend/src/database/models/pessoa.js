'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define('Pessoa', {
    idpessoa: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING
  }, {});
  Pessoa.associate = function(models) {
    // associations can be defined here
  };
  return Pessoa;
};