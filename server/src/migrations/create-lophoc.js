"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Lophocs", {
			id: {
				type: Sequelize.STRING,
			},
			mslop: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.STRING,
			},
			mskhoa: {
				primaryKey: true,

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
		await queryInterface.dropTable("Lophocs")
	},
}
