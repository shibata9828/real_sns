const { crossOriginOpenerPolicy } = require("helmet")
const { default: mongoose } = require("mongoose")

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3, 
        max: 25,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        min: 6,
        max:50,
    },
    coverPicture: {
        type: String,
        default: "",
    },
    followers: {
        type: Array,
        default: [],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    desc: {
        type: String,
        max: 70,
    },
    city: {
        type: String,
        max: 50,
    },
},
{timestamps}
);