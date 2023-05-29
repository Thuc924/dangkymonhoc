"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Monhocs", {
			id: {
				type: Sequelize.STRING,
			},
			msmh: {
				primaryKey: true,
				type: Sequelize.STRING,
			},
			tenmh: {
				type: Sequelize.STRING,
			},
			sotinchi: {
				type: Sequelize.STRING,
			},
			mskhoa: {
				primaryKey: true,

				type: Sequelize.STRING,
			},
			mshocky: {
				primaryKey: true,
				type: Sequelize.STRING,
			},
			mota: {
				type: Sequelize.STRING,
			},
			songhanh: {
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
		await queryInterface.dropTable("Monhocs")
	},
}
