const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/create", userController.createUser);
router.get("/get/:email", userController.getUserByEmail);
router.get("/get", userController.getAllUsers);

module.exports = router;