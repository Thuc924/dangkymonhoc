'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Hocphis', {
         id: {
            type: Sequelize.STRING,
         },
         mshp: {
            primaryKey: true,
            allowNull: false,
            type: Sequelize.STRING,
         },
         mssv: {
            primaryKey: true,
            allowNull: false,
            type: Sequelize.STRING,
         },
         mshocky: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         namhoc: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         hocphi: {
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
      await queryInterface.dropTable('Hocphis')
   },
}
