const dbConnection = require("../DAL/db-products");

exports.getAllProducts = (req, res) => {
    try {
        const products = dbConnection.findAllProducts();
        res.status(200).send(products);
        return;
    } catch (error) {
        res.status(400).send(error);
        return;
    }
};

exports.getProductById = (req, res) => {
    try {
        const id = Number(req.params.id);
        const product = dbConnection.findProduct(id);
        res.status(200).send(product);
        return;
    } catch (error) {
        res.status(400).send(error);
        return;
    }
};

exports.addProduct = (req, res) => {
    try {
        const new_product = req.body;
        dbConnection.addProduct(new_product);
        res.status(200).send(new_product);
        return;
    } catch (error) {
        res.status(400).send(error);
        return;
    }
};

exports.updateProduct = (req, res) => {
    try {
        const id = Number(req.params.id);
        const update_product = req.body;
        dbConnection.updateProduct(id, update_product);
        res.status(200).send(update_product);
    } catch (error) {
        res.status(400).send(error);
        return;
    }
};

exports.deleteProduct = (req, res) => {
    try {
        const id = Number(req.params.id);
        const delete_product = dbConnection.deleteProduct(id);
        res.status(200).send(delete_product);
    } catch (error) {
        res.status(400).send(error);
        return;
    }
};

exports.updateQuantity = (req, res) => {
    try {
        const id = Number(req.params.id);
        const operator = req.params.operator;

        const update_product = dbConnection.updateQuantity(id, operator);
        res.status(200).send(update_product);
        
    } catch (error) {
        res.status(400).send(error);
        return;
    }
};
