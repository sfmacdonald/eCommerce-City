const Sequelize = require('sequelize');
const sequelizeConfig = require('../config/connection.js'); 
const sequelize = new Sequelize(sequelizeConfig);

// Import models
const Product = require('./Product')(sequelize, Sequelize);
const Category = require('./Category')(sequelize, Sequelize);
const Tag = require('./Tag')(sequelize, Sequelize);
const ProductTag = require('./ProductTag')(sequelize, Sequelize);

// Define associations
Product.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id', as: 'tags' });
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id', as: 'products' });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
