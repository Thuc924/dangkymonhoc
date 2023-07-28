'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Lops', {
         id: {
            primaryKey: true,
            type: Sequelize.STRING,
         },
         mslophoc: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         msmh: {
            type: Sequelize.STRING,
         },
         mssv: {
            type: Sequelize.STRING,
         },
         msgiangvien: {
            type: Sequelize.STRING,
         },
         mshocky: {
            type: Sequelize.STRING,
         },
         thu: {
            type: Sequelize.STRING,
         },
         tietbd: {
            type: Sequelize.STRING,
         },
         sotiet: {
            type: Sequelize.STRING,
         },
         phong: {
            type: Sequelize.STRING,
         },
         mssv: {
            type: Sequelize.STRING,
         },
         ngaybd: {
            type: Sequelize.STRING,
         },
         ngaykt: {
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
      await queryInterface.dropTable('Lops')
   },
}
