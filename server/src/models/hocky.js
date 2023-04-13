'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
   class Hocky extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         Hocky.hasMany(models.Monhoctochuc, { foreignKey: 'mshocky', as: 'hockies' })
      }
   }
   Hocky.init(
      {
         mshocky: DataTypes.STRING,
         tenhocky: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: 'Hocky',
      }
   )
   return Hocky
}
