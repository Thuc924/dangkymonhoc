'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
   class Khoa extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         Khoa.hasMany(models.Lophoc, { foreignKey: 'mskhoa', as: 'khoa' })
         Khoa.hasMany(models.Monhoc, { foreignKey: 'mskhoa', as: 'khoaMH' })
      }
   }
   Khoa.init(
      {
         mskhoa: DataTypes.STRING,
         tenkhoa: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: 'Khoa',
      }
   )
   return Khoa
}
