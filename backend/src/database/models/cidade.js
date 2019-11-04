'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cidade = sequelize.define('Cidade', {
    idcidade: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: DataTypes.STRING,
    uf: DataTypes.STRING
  }, {});
  Cidade.associate = function (models) {
    // associations can be defined here
  };
  return Cidade;
};
