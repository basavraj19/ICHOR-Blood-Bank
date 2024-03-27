'use strict';
/** @type {import('sequelize-cli').Migration} */

const { Enum } = require('../utils/common');
const { wholeBlood, PRBCs } = Enum.BloodType;
const { Processed, UnProcessed } =Enum.ProcessingStatus;
const { APostitive, ANegative, BPostitive, BNegative, ABNegative, ABPostitive, OPostitive, ONegative } = Enum.BloodGroups;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BloodDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DonarId : {
        type: Sequelize.INTEGER,
        allowNull : false,
        references :{
          model :'Donars',
          key :'id'
        },
        onDelete : 'CASCADE'
      },
      bloodType: {
        type: Sequelize.ENUM,
        values: [ wholeBlood, PRBCs ],
        allowNull: false
      },
      bloodGroup: {
        type: Sequelize.ENUM,
        values: [APostitive, ANegative, BPostitive, BNegative, ABNegative, ABPostitive, OPostitive, ONegative],
        allowNull: false
      },
      bloodweight : {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      collectionDate: {
        type : Sequelize.DATE,
        allowNull: false
      },
      expiryDate : {
        type : Sequelize.DATE,
        allowNull: false
      },
      processingStatus: {
        type: Sequelize.ENUM,
        values : [ Processed, UnProcessed ],
        allowNull : false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BloodDetails');
  }
};