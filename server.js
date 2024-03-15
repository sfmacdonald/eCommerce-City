const express = require('express');
const routes = require('./routes');
<<<<<<< HEAD
// import sequelize connection
=======
const sequelize = require('./config/connection.js'); // Adjust the path as necessary
>>>>>>> b32726f830bc64de997a068ea815dbd3bde5259d

const app = express();
const PORT = process.env.PORT || 3006;

<<<<<<< HEAD
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
=======
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
>>>>>>> b32726f830bc64de997a068ea815dbd3bde5259d
