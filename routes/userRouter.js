const express = require("express");
const userController = require("../controller/userController");
const userauthentication = require("../middleware/authentication");

const router = express.Router();

router.get("/", userController.getHomePage);

router.get("/main-page", userController.getMainPage);

router.post("/signup", userController.userSignup);

router.post("/login", userController.postUserLogin);

router.get(
  "/get-users",
  userauthentication.authenticate,
  userController.getAlluser
);

router.get(
  "/get-current-user",
  userauthentication.authenticate,
  userController.getcurrentuser
);
module.exports = router;
