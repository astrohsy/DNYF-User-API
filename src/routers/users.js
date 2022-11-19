const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const router = express.Router();
const queries = require('../db/queries')
const paginate = require("express-paginate")
const user_controller = require("../controller/users");

// Sequilize
const sequelize = require('../config/db.config')
const User = require('../models/models')

// auth0 stage (user authentication)
router.get("/", (req, res) => {
    if (req.oidc.isAuthenticated()) {
        res.send('Logged in');
        const first_name = req.oidc.user.given_name;
        const last_name = req.oidc.user.family_name;
        const alias = req.oidc.user.nickname;
        const uid = req.oidc.user.sub;
        const affiliation = "GS";

        queries.insertUser(uid, alias, first_name, last_name, affiliation)
    } else {
        res.send('Logged out');
    }
});

// router.get("/users:uid", requiresAuth(), (req, res) => {
//     res.send(JSON.stringify(req.oidc.user))
// });

router.get("/users", requiresAuth(), (req, res) => {
    const limit = req.query.limit || 10;
    const offset = req.offset;
    
});

// router.post("/users", requiresAuth(), (req, res) => {

// })

// router.delete("/users:uid", requiresAuth(), (req, res) => {

// })

// router.put("/users:uid", requiresAuth(), (req, res) => {

// })

module.exports = router;