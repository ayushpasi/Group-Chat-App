const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/", userController.getHomePage);

router.post("/signUp", userController.userSignup);

module.exports = router;