'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
   class Giangvien extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         Giangvien.belongsTo(models.Khoa, {
            foreignKey: 'mskhoa',
            targetKey: 'mskhoa',
            as: 'Khoa',
         })
         Giangvien.hasMany(models.Monhoctochuc, {
            foreignKey: 'msgiangvien',
            as: 'GV',
         })
      }
   }
   Giangvien.init(
      {
         msgiangvien: DataTypes.STRING,
         tengiangvien: DataTypes.STRING,
         chucvu: DataTypes.STRING,
         mskhoa: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: 'Giangvien',
      }
   )
   return Giangvien
}
