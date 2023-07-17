'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
   class Monhoctochuc extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         Monhoctochuc.belongsTo(models.Monhoc, {
            foreignKey: 'msmh',
            targetKey: 'msmh',
            as: 'monhocTC',
         })
         Monhoctochuc.belongsTo(models.Giangvien, {
            foreignKey: 'msgiangvien',
            targetKey: 'msgiangvien',
            as: 'GV',
         })
      }
   }
   Monhoctochuc.init(
      {
         msmh: DataTypes.STRING,
         msgiangvien: DataTypes.STRING,
         mslophoc: DataTypes.STRING,
         siso: DataTypes.STRING,
         phanTramQT: DataTypes.STRING,
         phanTramGK: DataTypes.STRING,
         thu: DataTypes.STRING,
         tietbd: DataTypes.STRING,
         sotiet: DataTypes.STRING,
         phong: DataTypes.STRING,
         monhoctruoc: DataTypes.STRING,
         monhocsau: DataTypes.STRING,
         mota: DataTypes.STRING,
         songhanh: DataTypes.STRING,
         ngaybd: DataTypes.STRING,
         ngaykt: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: 'Monhoctochuc',
      }
   )
   return Monhoctochuc
}
