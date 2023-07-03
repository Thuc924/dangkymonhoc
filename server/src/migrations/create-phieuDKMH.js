"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("PhieuDKMHs", {
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
			mslophoc: {
				type: Sequelize.STRING,
			},
			siso: {
				type: Sequelize.STRING,
			},
			phanTramQT: {
				type: Sequelize.STRING,
			},
			phanTramGK: {
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
			tengiangvien: {
				type: Sequelize.STRING,
			},
			ngaybd: {
				type: Sequelize.STRING,
			},
			ngaykt: {
				type: Sequelize.STRING,
			},
			mssv: {
				primaryKey: true,
				type: Sequelize.STRING,
			},
			hocphi: {
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
		await queryInterface.dropTable("PhieuDKMHs")
	},
}
