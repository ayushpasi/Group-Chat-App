const express = require("express");
const router = express.Router();
const resetPasswordController = require("../controller/resetPasswordController");

router.post("/send-mail", resetPasswordController.sendMail);
router.get(
  "/reset-password-page/:requestId",
  resetPasswordController.resetPasswordPage
);
router.post("/reset-password", resetPasswordController.updatePassword);

module.exports = router;
