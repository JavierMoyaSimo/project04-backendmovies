'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('article-orders', {
      id_article:{
        type: Sequelize.INTEGER,
        references: {
          model: 'articles',
          key: 'id_article'
        }
      },
      id_order:{
        type: Sequelize.INTEGER,
        references: {
          model: 'orders',
          key: 'id_order'
        }
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('article-orders');
  }
};