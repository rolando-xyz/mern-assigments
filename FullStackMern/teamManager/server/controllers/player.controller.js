const {Player} = require("../models/player.model")

module.exports.message = (req, res) => {
    res.json({message: "message from backend"})
}

module.exports.allPlayers = (req, res) => {
    Player.find({})
        .then(players => res.json(players))
        .catch(err => res.status(400).json(err))
}

module.exports.onePlayer = (req, res) => {
    Player.findOne({_id:req.params.id})
        .then(onePlayer => res.json(onePlayer))
        .catch(err => res.status(400).json(err))
}

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

module.exports.editPlayer = (req, res) => {
    Player.findOneAndUpdate({_id: req.params.id},req.body,{new: true, runValidators: true})
    .then(response => res.json(response))
    .catch(err => res.status(400).json(err))
}

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}