const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    date: Date,
    location: String,
});

module.exports = mongoose.model('Event', eventSchema);