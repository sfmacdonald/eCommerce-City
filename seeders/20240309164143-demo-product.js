'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [{
      product_name: 'Laptop',
      price: 1000.00,
      stock: 5,
      category_id: 1, // Assuming '1' is the ID for 'Electronics'
    }, {
      product_name: 'T-Shirt',
      price: 20.00,
      stock: 10,
      category_id: 2, // Assuming '2' is the ID for 'Clothing'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
