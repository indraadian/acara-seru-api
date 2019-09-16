const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullName: String,
    email: String,
    institution: String,
    title: String,
    phoneNumber: String,
    password: String,
    confirmPassword: String,
    levelUser: String
});

module.exports = mongoose.model('User', userSchema);