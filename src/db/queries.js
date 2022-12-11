// Sequilize
const sequelize = require("../config/db.config");
const User = require("../models/models");

// Create user
async function insertUser(uid, first_name, last_name) {
    sequelize
        .sync({ force: false })
        .then((res) => {
            return User.create({
                uid: uid,
                first_name: first_name,
                last_name: last_name,
            });
        })
        .then((user) => {
            console.log("User created: ", user);
            return true;
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
}

// Find user
async function findUser(uid) {
    const data = await User.findOne({
        where: { uid: uid },
    });
    if (data != null) {
        return data.dataValues;
    } else {
        return {};
    }
}

// Get All Users
async function getUsers(page_number, limit, offset) {
    return await User.findAndCountAll({ limit, offset })
        .then((data) => {
            const { count: total, rows: records } = data;
            const current_page = page_number ? +page_number : 0;
            const total_pages = Math.ceil(total / limit);
            return { total, records, total_pages, current_page };
        })
        .catch((err) => {
            return false;
        });
}

// Update user information
async function updateUsers(uid, first_name, last_name) {
    return await User.update(
        {
            first_name: first_name,
            last_name: last_name,
        },
        {
            where: { uid: uid },
        }
    )
        .then((res) => {
            console.log(res);
            if (res == 1) {
                return { result: true, status: 200 };
            } else {
                return { result: false, status: 403 };
            }
        })
        .catch((err) => {
            console.log(err);
            return { result: false, status: 500 };
        });
}

// Delete user
async function deleteUser(uid) {
    return await User.destroy({ where: { uid: uid } })
        .then((res) => {
            if (res == 1) {
                return { result: true, status: 200 };
            } else {
                return { result: false, status: 409 };
            }
        })
        .catch((err) => {
            console.log(err);
            return { result: false, status: 500 };
        });
}

module.exports = {
    insertUser,
    findUser,
    getUsers,
    updateUsers,
    deleteUser,
};
