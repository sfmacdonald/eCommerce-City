# eCommerce-City
Your one stop shop for internet shopping

## Table of Contents

- [Project Name](#eCommerce-City)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Features](#features)
- [Usage](#usage)
- [Testing](#testing)

# Description

Back end application for an e-commerce site. This application utilizes Express.js API and configured to use Sequelize to interact with a MySQL database.

# User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

# Acceptance Criteria

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

# Features

This appllication has the following features and functions:

1. Ability for user to perform CRUD actions on Category, Product, and Tag objects.

## Usage

The github repository may be found at https://github.com/sfmacdonald/eCommerce-City

See attached screenrecording for demonstration: https://drive.google.com/file/d/17KcrtZMyKxQNkZELyV7o6dtQd9qW_SQU/view?usp=drivesdk

## Testing

Testing may be accomplished manually by:
Tag Routes
Get All Tags with Associated Products

Method: GET
URL: http://localhost:3006/api/tags
Get Single Tag by ID with Associated Products

Method: GET
URL: http://localhost:3006/api/tags/:id (replace :id with the actual tag ID)
Create a New Tag

Method: POST
URL: http://localhost:3006/api/tags
JSON Body:
json
Copy code
{
  "tag_name": "New Tag"
}
Update a Tag's Name by ID

Method: PUT
URL: http://localhost:3006/api/tags/:id (replace :id with the actual tag ID)
JSON Body:
json
Copy code
{
  "tag_name": "Updated Tag Name"
}
Delete a Tag by ID

Method: DELETE
URL: http://localhost:3006/api/tags/:id (replace :id with the actual tag ID)
Category Routes
Similar to the tag routes, you will have:

Find All Categories with Associated Products

Method: GET
URL: http://localhost:3006/api/categories
Find One Category by ID with Associated Products

Method: GET
URL: http://localhost:3006/api/categories/:id
Create a New Category

Method: POST
URL: http://localhost:3006/api/categories
JSON Body:
json
Copy code
{
  "category_name": "New Category"
}
Update a Category by ID

Method: PUT
URL: http://localhost:3006/api/categories/:id
JSON Body:
json
Copy code
{
  "category_name": "Updated Category Name"
}
Delete a Category by ID

Method: DELETE
URL: http://localhost:3006/api/categories/:id

Product Routes
Get All Products with Their Associated Categories and Tags

Method: GET
URL: http://localhost:3000/api/products
Get a Single Product by ID with Its Associated Category and Tags

Method: GET
URL: http://localhost:3000/api/products/:id (replace :id with the actual product ID)
Create a New Product

Method: POST
URL: http://localhost:3000/api/products
JSON Body:
json
Copy code
{
  "product_name": "New Product",
  "price": 100.00,
  "stock": 10,
  "category_id": 1,
  "tagIds": [1, 2, 3] // Assuming these tag IDs exist
}
Note: The tagIds array should contain the IDs of tags you wish to associate with this product. Adjust the structure as necessary based on your actual model attributes.
Update a Product by ID

Method: PUT
URL: http://localhost:3000/api/products/:id (replace :id with the actual product ID)
JSON Body:
json
Copy code
{
  "product_name": "Updated Product Name",
  "price": 150.00,
  "stock": 15,
  "category_id": 2, // Assuming this category ID exists
  "tagIds": [2, 3] // Update associated tags as needed
}
Similar to the create operation, include any fields you wish to update for the product, along with updated tag associations if necessary.
Delete a Product by ID

Method: DELETE
URL: http://localhost:3000/api/products/:id (replace :id with the actual product ID)
