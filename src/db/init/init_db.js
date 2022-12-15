// const mysql = require("mysql2");
// const queries = require("../queries");
// require("dotenv").config();

// function initDB() {
//     const conn = mysql.createConnection({
//         host: process.env.DB_HOST,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASS,
//         port: process.env.DB_PORT | 3306,
//     });
//     conn.query(
//         "CREATE DATABASE IF NOT exists dnyf_users_db",
//         function (err, res) {
//             if (err) {
//                 console.log(err);
//             }
//         }
//     );

//     conn.end();
// }

// module.exports = { initDB };
