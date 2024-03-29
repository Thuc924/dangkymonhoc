'use strict'
const { Model } = require('sequelize')
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
         Hocphi.belongsTo(models.Sinhvien, {
            foreignKey: 'mssv',
            targetKey: 'mssv',

            as: 'HocPhi_SV',
         })
      }
   }
   Hocphi.init(
      {
         mshp: DataTypes.STRING,
         mssv: DataTypes.STRING,
         mshocky: DataTypes.STRING,
         namhoc: DataTypes.STRING,
         hocphi: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: 'Hocphi',
      }
   )
   return Hocphi
}
