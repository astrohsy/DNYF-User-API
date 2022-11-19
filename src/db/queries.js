const helper = require('./helper');

// Sequilize
const sequelize = require('../config/db.config')
const User = require('../models/models')

// Create user
async function insertUser(uid, alias, first_name, last_name, affiliation) {
    sequelize
        .sync({force: false})
        .then((res) => {
            return User.create({
                uid: uid,
                alias: alias,
                first_name: first_name,
                last_name: last_name,
                affiliation: affiliation
            })
            console.log(res);
        })
        .then(user => {
            console.log("User created: ", user);
        })
        .catch((err) => {
            console.log(err)
        });
};

module.exports = {
    insertUser
}