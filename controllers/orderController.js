const { Order } = require('../models');

// Get all orders
const getOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.render('orders/index', { orders });
      } catch (error) {
        res.status(500).json(error);
      }
    };

//Add a new order
const addOrder = async (req, res) => {
    try {
        const { item, quantity, status } = req.body;
        await Order.create({ item, quantity, status });
        res.redirect('/orders');
      } catch (error) {
        res.status(500).json(error);
      }
    };

//Get a single order
const getOrder = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        res.render('orders/editOrder', { order });
    } catch (error) {
        res.status(500).json(error);
    }
};

//Update an order
const updateOrder = async (req, res) => {
    try {
        const { item, quantity, status } = req.body;
        await Order.update({ item, quantity, status }, { where:  { id: req.params.id } });
        res.redirect('/orders');
    } catch (error) {
        res.status(500).json(error);
    }
};

//Delete an Order
const deleteOrder = async (req, res) => {
    try {
        await Order.destroy({ where: { id: req.params.id }});
        res.redirect('/orders');
    } catch (error) {
        res.status(500).json(error);
    }
    
};
    

module.exports = { getOrders, addOrder, getOrder, updateOrder, deleteOrder };