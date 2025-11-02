const api = require("../utils/api");
const Course = require("../models/course.model");

module.exports.getCourse = async (req, res) => {
    try {
        const id = await Course.findbyId(req.params.id);
        api.success(res,id);
    } catch (error) {
        return api.error(error, "error in getting course");
    }
}
module.exports.getAllCourse =async(req, res) => {
    try {
        const course = await Course.find();
        api.success(res, course);
    } catch (error) {
        return api.error(error, "Error in getting all courses");
    }
}
module.exports.createCourse = async (req, res) => {
    
    try {
        const { title, duration, instructor } = req.body;
        const course = await Course.create({ title, duration, instructor });
        api.success(res, course);
    } catch (error) {
        return api.error(error, "Error in creating course");
    }
}
module.exports.deleteCourse = async (req, res) => {
    try {
        const id = req.params.id
        if (!id) return api.error(error, "Invalid Input");
        const c_upd = await Course.findByIdandDelete(id);
        api.success(res, c_upd);
    } catch (error) {
        return api.error(error, "Error in deleting course");
    }    
}

module.exports.updateCourse = async (req, res) => {
    try {
        const { title, duration, instructor } = req.body;
        if(!Course.findbyId(req.params.id)) return api.error(error, "Course not found");
        const course = await Course.findbyIdandUpdate(req.params.id,{ title, duration, instructor });
        api.success(res, course);
    } catch (error) {
        return api.error(error, "Error in updating course");
    }
}
