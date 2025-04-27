'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      markId: {
        field: 'mark_id',
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:'marks',
            key: 'id'
          }
        }
      },
      model: {
        type: Sequelize.STRING,
        allowNull:false
      },
      mark: {
        type: Sequelize.STRING,
        allowNull: false
      },
      realizeDate: {
        type: Sequelize.DATE,
        field: 'realize_date',
      },
      ramSize: {
        type: Sequelize.INTEGER,
        allowNull: false,
      field: 'ram_size'
      },
      processor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      screenDiagonal: {
        type: Sequelize.STRING,
        allowNull: false,
      field: 'screen_diagonal'
      },
      nfs: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('phones');
  }
};