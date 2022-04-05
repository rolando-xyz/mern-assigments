const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "This is a required field."],
		minLength: [2, "Maybe more than 2 characters?"]
	},
	lastName: {
		type: String,
		required: [true, "This is a required field."],
		minLength: [3, "How about 3 here?"]
	},
	email: {
		type: String,
		required: [true, "This is a required field."],
		validate: {
         validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
         message: "Please enter a valid email."
      }
	},
	password: {
		type: String,
		required: [true, "This is a required field."],
		minLength: [8, "Your password must be at least 8 characters long."],
      maxLength: [24, "Your password must be shorter than 24 characters."],
      validate: {
         validator: val => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,24})?/.test(val),
         message: "Must contain at least 1 capital, 1 lower, 1 number and a special character."
      }
	}
}, {timestamps: true});

UserSchema.virtual('confirmPassword')
   .get( () => this.confirmPassword)
   .set( value => this.confirmPassword = value );

UserSchema.pre('validate', function(next) {
   if (this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', 'Password must match confirm password.');
   }
   next();
});

UserSchema.pre('save', function(next) {
	bcrypt.hash(this.password, 10)
	.then(hash => {
		this.password = hash;
         next();
      });
});

module.exports.User = mongoose.model("User", UserSchema);