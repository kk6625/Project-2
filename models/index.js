const mongoose = require('mongoose');
const User = require('./user');
const Order = require('./order');
const Product = require('./product');

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

module.exports = {
  User,
  Order,
  Product
};
