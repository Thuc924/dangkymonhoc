"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class Hocphi extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			// Lophoc.belongsTo(models.Khoa, {
			// 	foreignKey: "mskhoa",
			// 	targetKey: "mskhoa",
			// 	as: "khoa",
			// })
			// Lophoc.hasMany(models.Sinhvien, {
			// 	foreignKey: "mslop",
			// 	as: "lop",
			// })
		}
	}
	Hocphi.init(
		{
			mssv: DataTypes.STRING,
			msmh: DataTypes.STRING,
			hocphi: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Hocphi",
		}
	)
	return Hocphi
}
