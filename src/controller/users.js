const queries = require('../db/queries')

const get_page = (page_number, page_count) => {
    const limit = page_count ? +page_count : 10
    const offset = page_number ? page_number * limit : 0;
    return { limit, offset }
}


// Get single user info don
const who_is_you = async function(req, res) {
    const uid = req.params.uid;
    console.log("UID: " + uid)
    
    const result = await queries.findUser(uid);
    if (Object.keys(result).length) {
        res.send(result)
    } else {
        res.status(404).send("User not found: " + uid)
    }
}

// fetch all users
const who_are_yall = async function(req, res) {
    const { page_number, per_page } = req.query;    
    const { limit, offset } = get_page(page_number, per_page);

    const response = await queries.getUsers(page_number, limit, offset);
    if (res == false){
        res.status(500).send({message: "Error retreiving users"})
    }
    res.send(response)
}

// Create new user
const hello_friend = async function (req, res){
    console.log(req.body);
    console.log(req.headers)
    const {
        uid,
        first_name,
        last_name
    } = req.body

    if (Object.keys(await queries.findUser(uid)).length) {
        res.status(409).send("User already exists!")
    } else {
        queries.insertUser(uid, first_name, last_name)
        res.send("New User Registered")
    }
}

// Update current user
const witness_protection_service = async function (req, res){
    const uid = parseInt(req.params.uid)
    const {
        first_name,
        last_name,
    } = req.body
    const result = await queries.updateUsers(uid, first_name, last_name)
    if (result == true) {
        console.log("User updated")
    } else {
        res.status(500).log("Could not upate user: " + uid)
    }
}

// Delete user
const goodbye_friend = (req, res) => {
    const uid = req.params.uid
    const result = queries.deleteUser(uid);
    if (result == true) {
        res.send("User " + uid + " deleted")
    } else {
        res.status(500).send("Could not delete User wit UID: " + uid)
    }
}

module.exports = {
    who_is_you,
    who_are_yall,
    hello_friend,
    witness_protection_service,
    goodbye_friend
}