// Sequilize
const sequelize = require("../config/db.config");
const User = require("../models/models");

// Create user
async function insertUser(uid, first_name, last_name) {
    const res = sequelize
        .sync({ force: false })
        .then(async function (res) {
            const result = await User.create({
                uid: uid,
                first_name: first_name,
                last_name: last_name,
            }).then((res) => {
                return { status: 201, msg: `New User Registered` };
            });
            return result;
        })
        .catch((err) => {
            if ((err.original.errno = 1062)) {
                return { status: 409, response: `User already exists!` };
            } else {
                return { status: 500, response: `Internal Server Error` };
            }
        });
    return res;
}

// Find user
async function findUser(uid) {
    const data = await User.findOne({
        where: { uid: uid },
    });
    if (data != null) {
        return { status: 200, response: data.dataValues };
    } else {
        return { status: 404, response: `Cannot find user with ID: ${uid}` };
    }
}

// Get All Users
async function getUsers(page_number, limit, offset) {
    return await User.findAndCountAll({ limit, offset })
        .then((data) => {
            const { count: total, rows: records } = data;
            const current_page = page_number ? +page_number : 0;
            const total_pages = Math.ceil(total / limit);

            const previous = current_page == 0 ? 0 : current_page - 1;
            const next = current_page + 1;
            const prev_link = `/users/?page_number=${previous}`;
            const next_link = `/users/?page_number=${next}`;
            const curr_link = `/users/?page_number=${current_page}`;

            const links = [
                {
                    href: prev_link,
                    rel: "prev_page",
                    type: "GET",
                },
                {
                    href: next_link,
                    rel: "next_page",
                    type: "GET",
                },
                {
                    href: curr_link,
                    rel: "curr_page",
                    type: "GET",
                },
            ];

            const items = { total, records, total_pages, links, current_page };
            return { status: 200, response: items };
        })
        .catch((err) => {
            return { status: 500, response: `Internal server error` };
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
                return {
                    status: 200,
                    response: `User: ${uid} information updated`,
                };
            } else {
                return {
                    status: 400,
                    response: `No changes made for user: ${uid}`,
                };
            }
        })
        .catch((err) => {
            console.log(err);
            return { status: 500, response: `Internal server error` };
        });
}

// Delete user
async function deleteUser(uid) {
    return await User.destroy({ where: { uid: uid } })
        .then((res) => {
            if (res == 1) {
                return { status: 204, response: `User ${uid} deleted.` };
            } else {
                return {
                    status: 409,
                    response: `Unable to delete user with ID: ${uid}`,
                };
            }
        })
        .catch((err) => {
            console.log(err);
            return { status: 500, response: `Internal Server Error` };
        });
}

module.exports = {
    insertUser,
    findUser,
    getUsers,
    updateUsers,
    deleteUser,
};
