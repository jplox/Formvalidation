const mongoose = require('mongoose'); // mongoose module
const userSchema = new mongoose.Schema({
    //schema creation and mentioning schematype and additional properties
    firstname: {
        type: String,
        trim: true,
        required: [true, "First name is required"]  //sending the message from the server if any error occurs
    },
    lastname: {
        type: String,

        trim: true,
        required: [true, "last name is required"]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, "email is required"],
        index: {
            unique: true
        }
    },
    mobile_no: {
        type: Number,
        trim: true,
        required: [true, "number is required"],
        minlength: [10, "mobile number is invalid"],
        maxlength: [10, "mobile number should not more than 10 digits"]
    },
    password: {
        type: String,
        trim: true,
        required: [true, "password is required"],
        select: false,
        minlength: [4, "minmum 4 characters"],
        maxlength: [8, "maximum 8 characters"]
    },
    password_confirmation: {
        type: String,
        trim: true,
        required: [true, "password is required"],
        select: false,
        minlength: [4, "minmum 4 characters"],
        maxlength: [8, "maximum 8 characters"]
    },

})
const User = mongoose.model('User', userSchema)
module.exports = User