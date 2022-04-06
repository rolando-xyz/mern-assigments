const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true,"title required"],
        minlength: [2,"title must be 2 characters"]
    },
    price : {
        type: Number,
        required: [true,"price required"],
        minlength: [1,"price must be 1 characters"]
    },
    description : {
        type: String,
        required: [true,"description required"],
        minlength: [10,"description must be 10 characters"]
    }
}, {timestamps: true})

module.exports.Product = mongoose.model('Product', ProductSchema);