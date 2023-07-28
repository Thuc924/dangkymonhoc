'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
   class MonHocNguyenVong extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         MonHocNguyenVong.belongsTo(models.Monhoc, {
            foreignKey: 'msmh',
            targetKey: 'msmh',
            as: 'monhocNV',
         })
         MonHocNguyenVong.belongsTo(models.Sinhvien, {
            foreignKey: 'mssv',
            targetKey: 'mssv',
            as: 'SinhvienNV',
         })
      }
   }
   MonHocNguyenVong.init(
      {
         msmh: DataTypes.STRING,
         mssv: DataTypes.STRING,
         hocphi: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: 'MonHocNguyenVong',
      }
   )
   return MonHocNguyenVong
}
