'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [{
      category_name: 'Electronics',
      // Include additional fields as necessary
    }, {
      category_name: 'Books',
      // Include additional fields as necessary
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
