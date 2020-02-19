'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Projects', [{
    projectName: 'Heaven',
    createdAt: new Date(),
    updatedAt: new Date()
    
  },
  {
    projectName:'drago',
    createdAt:new Date(),
    updatedAt:new Date()
  },
{
  projectName: 'Khaleesi',
  createdAt: new Date(),
  updatedAt: new Date(),
}], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
