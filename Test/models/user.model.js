const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    age: {
        type: Number,
        required: true,
        trim:true
    },
    courseId: {
        type: mongoose.Types.Array,
        required: true,
        trim:true
    }
})

module.exports.UserModel = mongoose.model("User", userSchema);