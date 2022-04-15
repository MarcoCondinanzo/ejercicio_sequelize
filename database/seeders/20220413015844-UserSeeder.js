'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
await queryInterface.bulkInsert('Users', 
  [
    {
      name: 'Andres Fernandez',
      email: 'andres@mail.com',
      rol: 1,
      password:"123",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Juan Perez',
      email: 'otro@mail.com',
      rol: 0,
      password:"123",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
    {});
 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
