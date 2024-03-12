'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('product_tags', [{
      product_id: 1, // Assuming '1' is the ID for 'Laptop'
      tag_id: 1, // Assuming '1' is the ID for 'Bestseller'
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      product_id: 2, // Assuming '2' is the ID for 'T-Shirt'
      tag_id: 2, // Assuming '2' is the ID for 'Limited Edition'
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product_tags', null, {});
  }
};
