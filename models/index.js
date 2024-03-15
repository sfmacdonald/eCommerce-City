const Sequelize = require('sequelize');
const sequelizeConfig = require('../config/connection.js'); // Assuming your Sequelize connection configuration is here
const sequelize = new Sequelize(sequelizeConfig);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.Product = require('./Product')(sequelize, Sequelize);
db.Category = require('./Category')(sequelize, Sequelize);
db.Tag = require('./Tag')(sequelize, Sequelize);
db.ProductTag = require('./ProductTag')(sequelize, Sequelize);

// Set up associations exactly as you've specified in your provided code
db.Product.belongsTo(db.Category, { foreignKey: 'category_id' });
db.Category.hasMany(db.Product, { foreignKey: 'category_id' });
db.Product.belongsToMany(db.Tag, { through: db.ProductTag, foreignKey: 'product_id', as: 'tags' });
db.Tag.belongsToMany(db.Product, { through: db.ProductTag, foreignKey: 'tag_id', as: 'products' });

Product.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id', as: 'tags' });
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id', as: 'products' });

// Export all models and associations
module.exports = {
  ...db,
  Product,
  Category,
  Tag,
  ProductTag,
};
