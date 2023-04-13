'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Monhocs', {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         msmh: {
            type: Sequelize.STRING,
         },
         tenmh: {
            type: Sequelize.STRING,
         },
         sotinchi: {
            type: Sequelize.STRING,
         },
         mskhoa: {
            type: Sequelize.STRING,
         },
         mota: {
            type: Sequelize.STRING,
         },
         sotiet: {
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
      await queryInterface.dropTable('Monhocs')
   },
}
