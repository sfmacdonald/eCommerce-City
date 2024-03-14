'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
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

  async down(queryInterface, Sequelize) {
    // Remove 'createdAt' and 'updatedAt' columns from 'tags'
    await queryInterface.removeColumn('tags', 'createdAt');
    await queryInterface.removeColumn('tags', 'updatedAt');
  }
};
