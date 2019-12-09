'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pedido', {
      idpedido: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idpessoa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Pessoa',
          key: 'idpessoa'
        }
      },
      descricao: {
        type: Sequelize.STRING
      },
      lancamento: {
        type: Sequelize.DATE
      },
      baixa: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pedido');
  }
};