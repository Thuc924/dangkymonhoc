"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class Monhoc extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Monhoc.belongsTo(models.Khoa, {
				foreignKey: "mskhoa",
				targetKey: "mskhoa",
				as: "khoaMH",
			})
			// Monhoc.hasOne(models.Monhoctochuc, {
			// 	foreignKey: { name: "msmh", unique: false },
			// 	as: "monhoc",
			// })
			Monhoc.hasMany(models.PhieuDKMH, {
				foreignKey: "msmh",
				as: "monhocDK",
			})
			Monhoc.hasMany(models.Monhoctochuc, {
				foreignKey: "msmh",
				as: "monhocTC",
			})
		}
	}
	Monhoc.init(
		{
			msmh: DataTypes.STRING,
			tenmh: DataTypes.STRING,
			sotinchi: DataTypes.STRING,
			mskhoa: DataTypes.STRING,
			mshocky: DataTypes.STRING,
			songhanh: DataTypes.STRING,
			mota: DataTypes.STRING,
			sotiet: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Monhoc",
		}
	)
	return Monhoc
}
