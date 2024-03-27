'use strict';
const {
  Model
} = require('sequelize');

const { Enum } = require('../utils/common');
const { wholeBlood, PRBCs } = Enum.BloodType;
const { Processed, UnProcessed } =Enum.ProcessingStatus;
const { APostitive, ANegative, BPostitive, BNegative, ABNegative, ABPostitive, OPostitive, ONegative } = Enum.BloodGroups;

module.exports = (sequelize, DataTypes) => {
  class BloodDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Donar,{
         foreignKey : 'DonarId'
      });
    }
  }
  BloodDetails.init({
    DonarId : {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    bloodType: {
      type: DataTypes.ENUM,
      values: [ wholeBlood, PRBCs ],
      allowNull: false
    },
    bloodGroup: {
      type: DataTypes.ENUM,
      values: [APostitive, ANegative, BPostitive, BNegative, ABNegative, ABPostitive, OPostitive, ONegative],
      allowNull: false
    },
    bloodweight : {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    collectionDate: {
      type : DataTypes.DATE,
      allowNull: false
    },
    expiryDate : {
      type : DataTypes.DATE,
      allowNull: false
    },
    processingStatus: {
      type: DataTypes.ENUM,
      values : [ Processed, UnProcessed ],
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'BloodDetails',
  });
  return BloodDetails;
};