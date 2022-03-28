const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    playerName:{
        type: String,
        required: [true, "Player name is required"],
        minlength: [3, "Player name must be at least 3 characters"]
    },
    prefferedPosition:{
        type: String,
        required: [true, "Preffered position is required"],
        minlength: [3, "Preffered position must be at least 3 characters"]
    }
},{timestamps: true})

module.exports.Player = mongoose.model('Player', PlayerSchema)