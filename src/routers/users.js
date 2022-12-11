const express = require("express");
const router = express.Router();
const user_controller = require("../controller/users");
router.use(express.json());

// Create New User
router.post("/", user_controller.hello_friend);

// Get all users
router.get("/", user_controller.who_are_yall);

// Get specific user
router.get("/:uid", user_controller.who_is_you);

// Delete user
router.delete("/:uid", user_controller.goodbye_friend);

// Update user
router.put("/:uid", user_controller.witness_protection_service);

module.exports = router;
