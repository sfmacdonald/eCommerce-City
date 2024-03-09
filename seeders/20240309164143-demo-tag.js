'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tags', [{
      tag_name: 'Bestseller',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      tag_name: 'Limited Edition',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
