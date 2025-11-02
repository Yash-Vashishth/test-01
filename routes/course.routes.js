const router = require("express").Router();
const controller = require("../controllers/course.controller");

router.get("/api/courses", controller.getAllCourse);
router.get("/api/courses/:id", controller.getCourse);
router.post("/api/courses", controller.createCourse);
router.put("/api/courses/:id", controller.updateCourse);
router.delete("/api/courses/:id", controller.deleteCourse);