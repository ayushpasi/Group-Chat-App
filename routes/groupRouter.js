const express = require("express");
const router = express.Router();
const groupController = require("../controller/groupController");
const userauthentication = require("../middleware/authentication");

router.post(
  "/create-group",
  userauthentication.authenticate,
  groupController.createGroup
);

router.get(
  "/get-groups",
  userauthentication.authenticate,
  groupController.getGroups
);

router.get("/get-group", groupController.getGroupbyId);

router.get("/get-group-members", groupController.getGroupMembersbyId);

router.post(
  "/update-group",
  userauthentication.authenticate,
  groupController.updateGroup
);
module.exports = router;
