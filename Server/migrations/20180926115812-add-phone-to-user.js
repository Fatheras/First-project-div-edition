'use strict';

module.exports = {
      /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'phone', {
      type: Sequelize.STRING
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.removeColumn('users', 'phone');

    
  }
};
