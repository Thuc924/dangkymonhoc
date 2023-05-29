"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Lops", {
			id: {
				type: Sequelize.STRING,
			},
			mslophoc: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.STRING,
			},
			mssv: {
				primaryKey: true,
				type: Sequelize.STRING,
			},
			tenlophoc: {
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
		await queryInterface.dropTable("Lops")
	},
}
