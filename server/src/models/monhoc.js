'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Monhoc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Monhoc.init({
    msmh: DataTypes.STRING,
    tenmh: DataTypes.STRING,
    sotinchi: DataTypes.STRING,
    mskhoa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Monhoc',
  });
  return Monhoc;
};