'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*Add altering commands here.
      Return a promise to correctly handle asynchronicity. */

    return queryInterface.bulkInsert('users', [{
      firstName: 'John',
      lastName: 'Doe',
      address: 'some address',
      phone: '099-00-00-000',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Vlad',
      lastName: 'Moe',
      address: 'some address',
      phone: '099-00-00-111',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Anna',
      lastName: 'Koe',
      address: 'some address',
      phone: '099-00-00-222',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('users', null, {});
  }
};
