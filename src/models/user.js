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
    firstName: {
      type: DataTypes.STRING,
      allowNull : false
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull : false
    },
    userName: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        isEmail : true
      },
      unique : true
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