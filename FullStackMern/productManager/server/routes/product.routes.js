const ProductController = require('../controllers/product.controller')

module.exports = app => {
    app.get("/api/message", ProductController.message)
    app.get("/api/Products", ProductController.allProducts)
    app.get("/api/Products/:id", ProductController.oneProduct)
    app.get("/api/Products/new", ProductController.createProduct)
    app.get("/api/Products/update/:id", ProductController.updateProduct)
    app.get("/api/Products/delete/:id", ProductController.deleteProduct)
}