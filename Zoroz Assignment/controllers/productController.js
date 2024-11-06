const Product = require('../models/product');
const mongoose = require('mongoose');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.render('listing', { 
            title: 'Product Listing', 
            products 
        });
    } catch (error) {
        res.status(500).send("Error fetching products");
    }
};



exports.create = async (req, res) => {
    res.render('new');
};


exports.createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.redirect('/');
    } catch (error) {
        res.status(400).send("Error creating product");
    }
};




exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.render('detail', { product });
    } catch (error) {
        res.status(404).send("Product not found");
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.render('edit', { product }); 

    } catch (err) {
        console.error('Error fetching product for editing:', err);
        res.status(500).send('Error fetching product');
    }
};


exports.update = async (req, res) => {
    
    try {
        
        await Product.findByIdAndUpdate(
            req.params.id, 
            req.body, 
        );
        res.redirect('/');
    } catch (err) {
        console.error('Error updating product:', err);
        res.status(500).send('Error updating product');
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (error) {
        res.status(400).send("Error deleting product");
    }
};

