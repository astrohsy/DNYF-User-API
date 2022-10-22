const express = require('express');
const router = express.Router();
const user_controller = require("../controller/users");

// auth0 stuff
const jwt = require('express-jwt');

router.get("/users:uid")
router.get("/users")
router.post("/users")
router.delete("/users:uid")
router.put("/users:uid")
module.exports = router;