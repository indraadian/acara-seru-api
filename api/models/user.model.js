const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullName: String,
    Email: String,
    Institution: String,
    Title: String,
    phoneNumber: String,
    password: String,
    confirmPassword: String
});

module.exports = mongoose.model('User', userSchema);