const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dob: { type: Date, required: true },
    phone: { type: String, required: true },
});

UserSchema.plugin(passportLocalMongoose, {usernameField: 'email'});
const User = mongoose.model('User', UserSchema);
module.exports = User;
