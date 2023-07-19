'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
   class PhieuDKMH extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         PhieuDKMH.belongsTo(models.Monhoc, {
            foreignKey: 'msmh',
            targetKey: 'msmh',
            as: 'monhocDK',
         })
         PhieuDKMH.belongsTo(models.Sinhvien, {
            foreignKey: 'mssv',
            targetKey: 'mssv',
            as: 'Sinhvien',
         })
      }
   }
   PhieuDKMH.init(
      {
         msmh: DataTypes.STRING,
         tenmh: DataTypes.STRING,
         mslophoc: DataTypes.STRING,
         mshocky: DataTypes.STRING,
         siso: DataTypes.STRING,
         phanTramQT: DataTypes.STRING,
         phanTramGK: DataTypes.STRING,
         thu: DataTypes.STRING,
         tietbd: DataTypes.STRING,
         sotiet: DataTypes.STRING,
         phong: DataTypes.STRING,
         tengiangvien: DataTypes.STRING,
         ngaybd: DataTypes.STRING,
         ngaykt: DataTypes.STRING,
         mssv: DataTypes.STRING,
         hocphi: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: 'PhieuDKMH',
      }
   )
   return PhieuDKMH
}
