const {Pet} = require("../models/pet.model")

module.exports.message = (req, res) => {
    res.json({message: "message from backend"})
}

module.exports.allPets = (req, res) => {
    Pet.find({})
        .then(pets => res.json(pets))
        .catch(err => res.status(400).json(err))
}

module.exports.onePet = (req,res) => {
    Pet.findOne({_id:req.params.id})
        .then(onePet => res.json(onePet))
        .catch(err => res.status(400).json(err))
}

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
    .then(response => res.json(response))
    .catch(err => res.status(400).json(err))
}

module.exports.editPet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id},req.body,{new: true, runValidators: true})
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}