'use strict';
const {
  Model
} = require('sequelize');
const { Enum } =require('../utils/common');
const { APostitive, ANegative, BPostitive, BNegative, ABNegative, ABPostitive, OPostitive, ONegative } = Enum.BloodGroups;
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type : DataTypes.STRING,
      allowNull :false
    },
    userName: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        isEmail : true
      },
      unique : true
    },
    contactNo: {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull :false
    },
    bloodGroup: {
     type: DataTypes.ENUM,
     values : [ APostitive, ANegative, BPostitive, BNegative, ABNegative, ABPostitive, OPostitive, ONegative],
     allowNull :false
    },
    address: {
      type : DataTypes.STRING,
    },
    password: {
     type: DataTypes.STRING,
     allowNull :false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};