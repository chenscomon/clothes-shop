const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    displayName: String,
    password: String
}, { timestamps: true});

module.exports = mongoose.model('User', UserSchema);