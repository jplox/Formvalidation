//schema
const mongooes = require('mongoose');
const userSchema = new mongooes.Schema({
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
module.exports = mongooes.model('User', userSchema)