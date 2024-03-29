'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Diems', {
         id: {
            type: Sequelize.STRING,
         },
         mssv: {
            primaryKey: true,
            allowNull: false,
            type: Sequelize.STRING,
         },
         msmh: {
            primaryKey: true,
            allowNull: false,
            type: Sequelize.STRING,
         },
         mshocky: {
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
         quatrinh: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         giuaky: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         diemthi: {
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
      await queryInterface.dropTable('Diems')
   },
}
