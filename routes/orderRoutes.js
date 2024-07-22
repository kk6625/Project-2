const express = require('express');
const router = express.Router();
const { Order } = require('../models');
const { getOrders } = require('../controllers/orderController');

// Create a new order
router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('user products.product');
    res.send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;


app.get('/orders', (req, res) => {
    const data = {
        title: 'Orders',
        navTitle: 'Dashboard',
        heading: 'Orders',
        navItems: [
            { label: 'Home', url: 'index.html', active: false },
            { label: 'Login', url: 'login.html', active: false },
            { label: 'Signup', url: 'signup.html', active: false },
            { label: 'Sales', url: 'sales.html', active: false },
            { label: 'Orders', url: 'orders.html', active: true },
            { label: 'Products', url: 'products.html', active: false }
        ],
        orders: []
    };
    res.render('orders', data);
});
