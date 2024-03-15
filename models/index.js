<<<<<<< HEAD
// models/index.js

'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Read all model files in the directory and import them
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Execute the associate function for each model to set up associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Set up associations
const Product = db.Product;
const Category = db.Category;
const Tag = db.Tag;
const ProductTag = db.ProductTag;
=======
const Sequelize = require('sequelize');
const sequelizeConfig = require('../config/connection'); // Assuming your Sequelize connection configuration is here
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
>>>>>>> b32726f830bc64de997a068ea815dbd3bde5259d

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
