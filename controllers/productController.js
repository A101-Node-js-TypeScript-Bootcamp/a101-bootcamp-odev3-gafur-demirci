const Products = require('../services/Products');

//get All Products
exports.getAllProducts = async (req,res) => {
    const response = await Products.getAllProducts();
    res.send(response);
};

//getById Products
exports.getById = async (req,res) => {
    const response = await Products.getById(req.params);
    res.send(response);
};

//getByDiscount Products
exports.getByDiscount = async (req,res) => {
    const response = await Products.getByDiscount(req.params, req.body);
    console.log("geldi");
    res.send(response);
};

//create Product
exports.createProduct = async (req,res) => {
    const response = await Products.add(req.body);
    console.log(response);
    res.send(response);
};

//update Product
exports.updateProduct = async (req,res) => {
    const response = await Products.update(req.params,req.body);
    res.send(response);
};

//delete Product
exports.deleteProduct = async (req,res) => {
    const response = await Products.delete(req.params);
    res.send(response);
};