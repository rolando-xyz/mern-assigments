const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName:{
        type: String,
        required: [true, "Pet Name is required"],
        minlength: [3, "Pet Name must be at least 3 characters"]
    },
    petType:{
        type: String,
        required: [true, "Pet Type is required"],
        minlength: [3, "Pet Type must be at least 3 characters"]
    },
    petDescription:{
        type: String,
        required: [true, "Pet Description is required"],
        minlength: [8, "Pet Description must be at least 8 characters"]
    },
    skill1:{
        type: String
    },
    skill2:{
        type: String
    },
    skill3:{
        type: String
    }
},{timestamps: true})

module.exports.Pet = mongoose.model('Pet', PetSchema)