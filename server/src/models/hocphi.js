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
         // Hocphi.belongsToMany(models.PhieuDKMH, {
         //    foreignKey: 'mssv',
         //    as: 'Phieu_HocPhi',
         // })
      }
   }
   Hocphi.init(
      {
         mshp: DataTypes.STRING,
         mssv: DataTypes.STRING,
         mshocky: DataTypes.STRING,
         hocphi: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: 'Hocphi',
      }
   )
   return Hocphi
}
