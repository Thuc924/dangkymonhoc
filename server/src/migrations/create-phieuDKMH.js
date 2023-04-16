'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('PhieuDKMHs', {
         id: {
            type: Sequelize.STRING,
         },
         msmh: {
            primaryKey: true,
            type: Sequelize.STRING,
         },
         mssv: {
            primaryKey: true,
            type: Sequelize.STRING,
         },
         hocphi: {
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
      await queryInterface.dropTable('PhieuDKMHs')
   },
}
