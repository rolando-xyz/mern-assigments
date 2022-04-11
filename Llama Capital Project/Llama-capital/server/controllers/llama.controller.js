const jwt = require('jsonwebtoken');
const { User } = require("../models/llama.model");

module.exports.findAllUsers = (req, res) => {
   User.find({})
      .then(allUsers => res.json(allUsers))
      .catch(err => res.status(400).json(err));
};

module.exports.findOneSingleUser = (req, res) => {
   User.findOne({ _id: req.params.id })
      .then(oneSingleUser => res.json(oneSingleUser))
      .catch(err => res.status(400).json(err));
};

module.exports.login = async(req, res) => {
   const user = await User.findOne({ email: req.body.email });

   if (user === null) {
      return res.sendStatus(400);
   }

   const correctPassword = await bcrypt.compare(req.body.password, user.password);

   if(!correctPassword) {
      return res.sendStatus(400);
   }

   const payload = { id: user._id };
   const userToken = jwt.sign(payload, process.env.FIRST_SECRET_KEY);

   res
      .cookie("usertoken", userToken, { httpOnly: true })
      .json({ message: "Success!" });
};

module.exports.logout = (req, res) => {
   res.clearCookie('usertoken');
   res.sendStatus(200);
}

module.exports.createNewUser = (req, res) => {
   User.create(req.body)
      .then(newlyCreatedUser => {
         const payload = { id: newlyCreatedUser._id };
         const userToken = jwt.sign(payload, process.env.FIRST_SECRET_KEY);
         console.log("We're HERE!");

         res
            .cookie("usertoken", userToken, { httpOnly: true })
            .json({ message: "Success!", user: newlyCreatedUser });
      })
      .catch(err => res.status(400).json(err));
};

module.exports.updateExistingUser = (req, res) => {
   User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then(updatedUser => res.json(updatedUser))
      .catch(err => res.status(400).json(err));
};

module.exports.deleteAnExistingUser = (req, res) => {
   User.deleteOne({ _id: req.params.id })
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err));
};

module.exports.doesUserExist = (req, res) => {
   User.exists({name: req.body.name})
      .then(UserExists => {
      if (UserExists) {
         // Promise.reject() will activate the .catch() below.
         return Promise.reject('This User already exists in the database.');
      }
      return createNewUser(req.body);
   })
   .then(saveResult => res.json(saveResult))
   .catch(err => res.status(400).json(err));
}

module.exports.index = (request, response) => {
   response.json({
      message: "Hello World"
   });
}