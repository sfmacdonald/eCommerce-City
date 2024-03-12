'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Create 'products' table
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      stock: {
        allowNull: false,
        defaultValue: 10,
        type: Sequelize.INTEGER
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories', // Note: This assumes 'categories' table exists and is named as such
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
    });

    // Add 'createdAt' and 'updatedAt' columns to 'tags'
    await queryInterface.addColumn('tags', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
    await queryInterface.addColumn('tags', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    });
  },

  async down (queryInterface, Sequelize) {
    // Drop 'products' table
    await queryInterface.dropTable('products');

    // Remove 'createdAt' and 'updatedAt' columns from 'tags'
    await queryInterface.removeColumn('tags', 'createdAt');
    await queryInterface.removeColumn('tags', 'updatedAt');
  }
};
