'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cars', [{
      name: 'Avanza 1.3 G',
      kubikasi_mesin: 1300,
      transmisi: 'manual',
      pengerak_roda: 'fwd',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Avanza 1.3 G',
      kubikasi_mesin: 1300,
      transmisi: 'automatic',
      pengerak_roda: 'fwd',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Avanza 1.3 E',
      kubikasi_mesin: 1300,
      transmisi: 'manual',
      pengerak_roda: 'fwd',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Avanza 1.3 E',
      kubikasi_mesin: 1300,
      transmisi: 'automatic',
      pengerak_roda: 'fwd',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Kijang Innova G',
      kubikasi_mesin: 2000,
      transmisi: 'manual',
      pengerak_roda: 'fwd',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Kijang Innova G',
      kubikasi_mesin: 1300,
      transmisi: 'automatic',
      pengerak_roda: 'fwd',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Agya 1.2 G',
      kubikasi_mesin: 1200,
      transmisi: 'manual',
      pengerak_roda: 'fwd',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Agya 1.2 G',
      kubikasi_mesin: 1300,
      transmisi: 'Automatic',
      pengerak_roda: 'fwd',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};
