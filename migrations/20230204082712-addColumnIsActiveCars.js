'use strict';
const { DataTypes } = require("sequelize");
const { Car } = require('../models/index')
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Cars',
      'is_active',
      {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    );

    await Car.update({ is_active: true }, {
      where: {
        deletedAt: {
          [Op.is]: null
        }
      }
    })

    return
  },

  async down(queryInterface, Sequelize) {
    // logic for reverting the changes
    await queryInterface.removeColumn(
      'Cars',
      'is_active'
    );

    return
  }

};


// module.exports = {
//   up: function (queryInterface, Sequelize) {
//     // logic for transforming into the new state
//     return queryInterface.addColumn(
//       'Cars',
//       'is_active',
//       {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false,
//         allowNull: false
//       }
//     );

//   },

//   down: function (queryInterface, Sequelize) {
//     // logic for reverting the changes
//     return queryInterface.removeColumn(
//       'Todo',
//       'completed'
//     );
//   }
// }