const { Product } = require('../models');

// Get all products
const getProducts = async (req, res) => {
    try {
      const products = await Product.findAll();
      res.render('products/index', { products });
    } catch (error) {
      res.status(500).json(error);
    }
  };

// Add a new product
const addProduct = async (req, res) => {
    try {
      const { name, quantity, reorderLevel } = req.body;
      await Product.create({ name, quantity, reorderLevel });
      res.redirect('/products');
    } catch (error) {
      res.status(500).json(error);
    }
  };

//Get a single product by ID
const getProduct = async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      res.render('products/editProduct', { product });
    } catch (error) {
      res.status(500).json(error);
    }
  };

// Update a product
const updateProduct = async (req, res) => {
    try {
        const { name, quantity, reorderLevel } = req.body;
        await Product.update({ name, quantity, reorderLevel }, { where: { id: req.params.id } });
        res.redirect('/products');
    } catch (error) {
      res.status(500).json(error);
    }
 };

 // Delete a product
const deleteProduct = async (req, res) => {
    try {
      await Product.destroy({ where: { id: req.params.id } });
      res.redirect('/products');
    } catch (error) {
      res.status(500).json(error);
    }
  };

module.exports = { getProducts, addProduct, getProduct, updateProduct, deleteProduct };
