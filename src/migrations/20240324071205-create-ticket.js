'use strict';
/** @type {import('sequelize-cli').Migration} */

const { Enum } = require('../utils/common');
const { Initiated, Pending, Fullfilled, Cancelled } = Enum.Status;
const { APostitive, ANegative, BPostitive, BNegative, ABNegative, ABPostitive, OPostitive, ONegative } =Enum.BloodGroups;


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contactNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bloodGroup: {
        type: Sequelize.ENUM,
        values : [ APostitive, ANegative, BPostitive, BNegative, ABNegative, ABPostitive, OPostitive, ONegative ],
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      TicketStatus : {
        type: Sequelize.ENUM,
        values : [ Initiated, Pending, Fullfilled, Cancelled ],
        defaultValue : Pending,
        allowNull: false
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
    await queryInterface.dropTable('Tickets');
  }
};