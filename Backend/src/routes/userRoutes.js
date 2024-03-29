const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/create", userController.createUser);
router.post("/get/:email", userController.getUserByEmail);
router.post("/get", userController.getAllUsers);
router.post("/sigin",userController.userSignIn);

module.exports = router;