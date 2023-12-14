'use strict';
/** @type {import('sequelize-cli').Migration} */

const { Enum } =require('../utils/common');
const { APostitive, ANegative, BPostitive, BNegative, ABNegative, ABPostitive, OPostitive, ONegative } = Enum.BloodGroups;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false
      },
      userName: {
        type: Sequelize.STRING,
        allowNull : false,
        unique : true
      },
      contactNo: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      bloodGroup: {
        type: Sequelize.STRING,
        values : [ APostitive, ANegative, BPostitive, BNegative, ABNegative, ABPostitive, OPostitive, ONegative],
        allowNull : false
      },
      address: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Users');
  }
};