const { Product } = require('../models/product.model')

module.exports.message = (req, res) => {
    res.json({message: "message from backend"})
}

module.exports.allProducts = (req, res) => {
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.json(err))
}

module.exports.oneProduct = (req, res) => {
    console.log(req.params.id)
    Product.findOne({_id: req.params.id})
    .then(product => res.json(product))
    .catch(err => res.json(err))
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    const id = req.params.id
    Product.findOneAndUpdate(
        {_id: id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.json(err))
}