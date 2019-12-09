'use strict';
module.exports = (sequelize, DataTypes) => {
  const Endereco = sequelize.define('Endereco', {
    idendereco: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    logradouro: DataTypes.STRING,
    bairro: DataTypes.STRING,
    complemento: DataTypes.STRING,
    numero: DataTypes.STRING,
    cep: DataTypes.STRING,
    idpessoa: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Pessoa',
        key: 'idpessoa'
      }
    },
    idcidade: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cidade',
        key: 'idcidade'
      }
    }
  }, {
    freezeTableName: true
  });
  Endereco.associate = function (models) {
    // associations can be defined here
    Endereco.belongsTo(models.Pessoa, {
      foreignKey: 'idpessoa'
    });
    Endereco.belongsTo(models.Cidade, {
      foreignKey: 'idcidade'
    });
  };
  return Endereco;
};