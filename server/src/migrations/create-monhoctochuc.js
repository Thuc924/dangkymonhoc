'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Monhoctochucs', {
         id: {
            type: Sequelize.INTEGER,
         },
         mshocky: {
            primaryKey: true,
            allowNull: false,
            type: Sequelize.STRING,
         },
         msmh: {
            primaryKey: true,
            allowNull: false,
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
      await queryInterface.dropTable('Monhoctochucs')
   },
}
