'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quantrivien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quantrivien.init({
    msqtv: DataTypes.STRING,
    tenqtv: DataTypes.STRING,
    email: DataTypes.STRING,
    sodienthoai: DataTypes.STRING,
    matkhau: DataTypes.STRING,
    diachi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Quantrivien',
  });
  return Quantrivien;
};