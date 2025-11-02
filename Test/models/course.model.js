const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim:true
    },
    duration: {
        type: String,
        required: true,
        trim:true
    },
    instructor: {
        type: String,
        required: true,
        trim:true
    }
})

module.exports.courseModel = mongoose.model("Course", courseSchema);