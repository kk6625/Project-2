const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  product: {
    type: String,
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Getting Ready', 'Shipped', 'Delivered']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
