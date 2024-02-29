const express = require("express");
const router = express.Router();
const chatController = require("../controller/chatController");
const userauthentication = require("../middleware/authentication");
const multerMiddleware = require("../middleware/multer");
const upload = multerMiddleware.multer.single("image");

router.post(
  "/post-message",
  userauthentication.authenticate,
  chatController.sendMessage
);

router.get("/get-message/:param", chatController.getMessages);

router.get(
  "/get-group-messages",

  chatController.getGroupMessages
);

router.post(
  "/post-image",
  userauthentication.authenticate,
  upload,
  chatController.saveChatImages
);
module.exports = router;
