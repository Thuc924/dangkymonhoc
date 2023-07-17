'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Monhoctochucs', {
         id: {
            primaryKey: true,
            type: Sequelize.STRING,
         },
         msmh: {
            primaryKey: true,
            allowNull: false,
            type: Sequelize.STRING,
         },
         msgiangvien: {
            primaryKey: true,
            allowNull: false,
            type: Sequelize.STRING,
         },
         mslophoc: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         siso: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         phanTramQT: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         phanTramGK: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         thu: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         tietbd: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         sotiet: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         phong: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         monhoctruoc: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         monhocsau: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         mota: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         songhanh: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         ngaybd: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         ngaykt: {
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
