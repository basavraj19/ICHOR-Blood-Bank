'use strict';
/** @type {import('sequelize-cli').Migration} */

const { Enum } =require('../utils/common');
const  { APostitive, ANegative, BPostitive, BNegative, ABNegative, ABPostitive, OPostitive, ONegative } = Enum.BloodGroups;
const { wholeBlood, PRBCs } = Enum.BloodType;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Donars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING,
        allowNull : false,
        unique : true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull : false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull : false,
      },
      bloodGroup: {
        type: Sequelize.ENUM,
        values : [ APostitive, ANegative, BPostitive, BNegative, ABNegative, ABPostitive, OPostitive, ONegative],
        allowNull : false,
      },
      bloodType: {
        type: Sequelize.ENUM,
        values: [wholeBlood, PRBCs],
        allowNull: false
      },
      dateOfBirth: {
        type: Sequelize.DATE,
        allowNull : false,
      },
      weight : {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      gender: {
        type: Sequelize.STRING,
        allowNull : false,
      },
      contactNumber: {
        type: Sequelize.INTEGER,
        allowNull : false,
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
    await queryInterface.dropTable('Donars');
  }
};