'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
   class Sinhvien extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         Sinhvien.belongsTo(models.Lophoc, {
            foreignKey: 'mslop',
            targetKey: 'mslop',
            as: 'lop',
         })
         Sinhvien.hasMany(models.PhieuDKMH, { foreignKey: 'mssv', as: 'Sinhvien' })
      }
   }
   Sinhvien.init(
      {
         mssv: DataTypes.STRING,
         mslop: DataTypes.STRING,
         tensv: DataTypes.STRING,
         email: DataTypes.STRING,
         sodienthoai: DataTypes.STRING,
         matkhau: DataTypes.STRING,
         diachi: DataTypes.STRING,
         noisinh: DataTypes.STRING,
         ngaysinh: DataTypes.STRING,
         gioitinh: DataTypes.STRING,
         avatar: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: 'Sinhvien',
      }
   )
   return Sinhvien
}
