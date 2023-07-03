"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Giangviens", {
			id: {
				type: Sequelize.STRING,
			},
			msgiangvien: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.STRING,
			},
			tengiangvien: {
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
		await queryInterface.dropTable("Giangviens")
	},
}
