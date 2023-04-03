'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Quantriviens', {
         id: {
            type: Sequelize.STRING,
         },
         msqtv: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.STRING,
         },
         tenqtv: {
            type: Sequelize.STRING,
         },
         email: {
            type: Sequelize.STRING,
         },
         sodienthoai: {
            type: Sequelize.STRING,
         },
         matkhau: {
            type: Sequelize.STRING,
         },
         diachi: {
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
      await queryInterface.dropTable('Quantriviens')
   },
}
