const router = require("express").Router();
const controller = require("../controllers/user.controller");

router.get("/api/students", controller.getAllUsers);
router.get("/api/students/:id", controller.getUser);
router.post("/api/students", controller.createUser);
router.put("/api/students/:id", controller.updateUser);
