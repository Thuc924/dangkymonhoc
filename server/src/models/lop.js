"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class Lop extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Lop.hasMany(models.Sinhvien, {
				foreignKey: "mssv",
				as: "sinhvien",
			})
		}
	}
	Lop.init(
		{
			mslophoc: DataTypes.STRING,
			mssv: DataTypes.STRING,
			tenlophoc: DataTypes.STRING,
			ngaybd: DataTypes.STRING,
			ngaykt: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Lop",
		}
	)
	return Lop
}
