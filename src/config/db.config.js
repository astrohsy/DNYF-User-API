require("dotenv").config();
const Sequilize = require("sequelize");

module.exports = new Sequilize({
    dialect: "mysql",
    host: process.env.DB_HOST | "db",
    username: process.env.DB_USER | "dbuser",
    password: process.env.DB_PASS | "dbuser",
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_NAME | "dnyf_users_db",
    define: {
        timestamps: false,
    },
    logging: (log) => console.log("logging:", log),
});
