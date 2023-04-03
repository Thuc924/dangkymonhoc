'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Sinhviens', {
         id: {
            type: Sequelize.STRING,
         },
         mssv: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.STRING,
         },
         tensv: {
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
         noisinh: {
            type: Sequelize.STRING,
         },
         ngaysinh: {
            type: Sequelize.STRING,
         },
         gioitinh: {
            type: Sequelize.STRING,
         },
         avatar: {
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
      await queryInterface.dropTable('Sinhviens')
   },
}
