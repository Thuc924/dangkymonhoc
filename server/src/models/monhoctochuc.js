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
         Monhoctochuc.belongsTo(models.Monhoc, { foreignKey: 'msmh', targetKey: 'msmh', as: 'monhoc' })
         Monhoctochuc.belongsTo(models.Hocky, { foreignKey: 'mshocky', targetKey: 'mshocky', as: 'hockies' })
      }
   }
   Monhoctochuc.init(
      {
         mshocky: DataTypes.STRING,
         msmh: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: 'Monhoctochuc',
      }
   )
   return Monhoctochuc
}
