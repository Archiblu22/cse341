const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Paguirre1478', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
