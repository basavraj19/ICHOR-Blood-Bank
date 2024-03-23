'use strict';
const {
  Model
} = require('sequelize');

const { Enum } =require('../utils/common');
const  { APostitive, ANegative, BPostitive, BNegative, ABNegative, ABPostitive, OPostitive, ONegative } = Enum.BloodGroups;

module.exports = (sequelize, DataTypes) => {
  class Donar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Donar.init({
    userName: {
      type: DataTypes.STRING,
      validate : {
        isEmail : true
      },
      unique : true,
      allowNull : false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull : false
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull : false
    },
    bloodGroup: {
      type: DataTypes.ENUM,
      values : [ APostitive, ANegative, BPostitive, BNegative, ABNegative, ABPostitive, OPostitive, ONegative],
      allowNull : false
    },
    dateOfBirth: {
      type: DataTypes.STRING,
      allowNull : false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull : false
    },
    contactNumber: {
      type: DataTypes.INTEGER,
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'Donar',
  });
  return Donar;
};