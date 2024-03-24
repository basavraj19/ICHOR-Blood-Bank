'use strict';
const {
  Model
} = require('sequelize');

const { Enum } = require('../utils/common');
const { Initiated, Pending, Fullfilled, Cancelled } = Enum.Status;
const { APostitive, ANegative, BPostitive, BNegative, ABNegative, ABPostitive, OPostitive, ONegative } =Enum.BloodGroups;

module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull : false
    },
    lastName: {
      type: DataTypes.STRING,
       allowNull : false
    },
    age: {
      type: DataTypes.INTEGER,
       allowNull : false
    },
    gender: {
      type: DataTypes.STRING,
       allowNull : false
    },
    contactNumber:{
      type: DataTypes.STRING,
       allowNull : false
    },
    bloodGroup: {
      type: DataTypes.ENUM,
      values : [ APostitive, ANegative, BPostitive, BNegative, ABNegative, ABPostitive, OPostitive, ONegative ],
      allowNull : false
    },
    quantity: {
      type: DataTypes.INTEGER,
       allowNull : false
    },
    TicketStatus : {
      type: DataTypes.ENUM,
      values : [Initiated, Pending, Fullfilled, Cancelled ],
      defaultValue : Pending,
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};