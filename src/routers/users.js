const express = require('express');
const router = express.Router();
const user_controller = require("../controller/users")

router.get("/users:uid", user_controller.get_user_info)
router.get("/users")
router.post("/users")
router.delete("/users:uid")
router.put("/users:uid")
module.exports = router;