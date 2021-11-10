//schema
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile_no: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    password_confirmation: {
        type: String,
        required: true
    },

})
const User = mongoose.model('User', userSchema)
module.exports = User