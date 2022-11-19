const Sequilize = require("sequelize");
db = require("../config/db.config");

const User = db.define("Users", {
    uid: {
        type: Sequilize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    alias: {
        type: Sequilize.STRING,
        allowNull: false,
    },
    first_name: {
        type: Sequilize.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequilize.STRING,
        allowNull: false,
    },
    bio: {
        type: Sequilize.STRING,
        allowNull: true,
    },
    affiliation: {
        type: Sequilize.STRING,
        allowNull: false,
    }
});

module.exports = User;
