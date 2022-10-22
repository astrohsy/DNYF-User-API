const db = require("../db")

// Get single user info
const who_is_you = (req, res) => {
    const uid = parseInt(req.params.uid)

    // SELECT * FROM users
    // WHERE users.uid = uid
    // res.status(200).json(res.rows)
}

// fetch all users
const who_are_yall = (req, res) => {
    // pagination buddy ol pal
}

// Create new user
const hello_friend = (req, res) => {
    const {
        alias,
        first_name,
        last_name,
        email,
        bio,
        affiliation
    } = req.body
}

// Update current user
const witness_protection_service = (req, res) => {
    const uid = parseInt(req.params.uid)
    const {
        alias,
        first_name,
        email,
        bio,
        affiliation
    } = req.body
}

// Delete user
const goodbye_friend = (req, res) => {
    const uid = parseInt(req.params.uid)
}

module.exports = {
    who_you_is,
    hello_friend,
    witness_protection_service,
    goodbye_friend
}