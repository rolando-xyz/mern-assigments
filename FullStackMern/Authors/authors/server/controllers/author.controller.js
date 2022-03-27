const {Author} = require("../models/author.model")

module.exports.message = (req, res) => {
    res.json({message: "message from backend"})
}

module.exports.allAuthors = (req,res) => {
    Author.find({})
        .then(authors => res.json(authors))
        .catch(err => res.status(400).json(err))
}

module.exports.oneAuthor = (req,res) => {
    Author.findOne({_id:req.params.id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.status(400).json(err))
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

module.exports.editJob = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id},req.body,{new: true, runValidators: true})
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteJob = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}