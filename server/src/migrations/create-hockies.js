'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Hockies', {
         id: {
            type: Sequelize.STRING,
         },
         mshocky: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.STRING,
         },
         tenhocky: {
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
      await queryInterface.dropTable('Hockies')
   },
}
