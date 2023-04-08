'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Khoas', {
         id: {
            type: Sequelize.STRING,
         },
         mskhoa: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.STRING,
         },
         tenkhoa: {
            type: Sequelize.STRING,
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
      })
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('Khoas')
   },
}
