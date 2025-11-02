const api = require("../utils/api");
const User = require("../models/user.model");

module.exports.getUser = async (req, res) => {
    try {
        const id = await User.findbyId(req.params.id);
        api.success(res,id);
    } catch (error) {
        return api.error(error, "error in getting user");
    }
}
module.exports.getAllUsers =async(req, res) => {
    try {
        const course = await User.find();
        api.success(res, course);
    } catch (error) {
        return api.error(error, "Error in getting all users");
    }
}
module.exports.createUser = async (req, res) => {
    try {
        const { name, age, courseId } = req.body;
        const user = await User.create({ name,age,courseId });
        api.success(res, user);
    } catch (error) {
        return api.error(error, "Error in creating user");
    }
}
module.exports.updateUser = async (req, res) => {
    try {
        const { name, age, courseId } = req.body;
        if(!User.findbyId(req.params.id)) return api.error(error, "User not found");
        const user = await User.findbyIdandUpdate(req.params.id,{ name, age, courseId });
        api.success(res, user);
    } catch (error) {
        return api.error(error, "Error in updating user");
    }
}
