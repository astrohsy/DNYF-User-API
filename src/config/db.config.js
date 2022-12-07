require('dotenv').config()
const Sequilize = require("sequelize");

module.exports = new Sequilize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.port || 3306,
    database: process.env.DB,
    define: {
        timestamps: false
    },
    logging: (log) => console.log("logging:", log)
});