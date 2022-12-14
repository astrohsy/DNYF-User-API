const queries = require("../db/queries");

const get_page = (page_number, page_count) => {
    const limit = page_count ? +page_count : 10;
    const offset = page_number ? page_number * limit : 0;
    return { limit, offset };
};

// Get single user info
const who_is_you = async function (req, res) {
    const uid = req.params.uid;
    const { status, response } = await queries.findUser(uid);
    res.status(status).send(response);
};

// fetch all users
const who_are_yall = async function (req, res) {
    const { page_number, per_page } = req.query;
    const { limit, offset } = get_page(page_number, per_page);
    const { status, response } = await queries.getUsers(
        page_number,
        limit,
        offset
    );
    res.status(status).send(response);
};

// Create new user
const hello_friend = async function (req, res) {
    const { uid, first_name, last_name } = req.body;
    const { status, response } = await queries.insertUser(
        uid,
        first_name,
        last_name
    );
    res.status(status).send(response);
};

// Update current user
const witness_protection_service = async function (req, res) {
    const uid = req.params.uid;
    const { first_name, last_name } = req.body;
    const { status, response } = await queries.updateUsers(
        uid,
        first_name,
        last_name
    );
    res.status(status).send(response);
};

// Delete user
const goodbye_friend = async function (req, res) {
    const uid = req.params.uid;
    const { status, msg } = await queries.deleteUser(uid);
    res.status(status).send(msg);
};

module.exports = {
    who_is_you,
    who_are_yall,
    hello_friend,
    witness_protection_service,
    goodbye_friend,
};
