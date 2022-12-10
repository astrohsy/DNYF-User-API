const mysql = require("mysql2");
const queries = require('../queries')
require('dotenv').config()

function initDB() {
    const conn = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT | 3306
    }) 
    conn.query(
        'CREATE DATABASE IF NOT exists dnyf_users_db',
        function (err, res) {
            if(err) {
                console.log(err)
            }
        }
    )
    
    conn.end();

    queries.insertUser(1, "Test", "User");
    queries.insertUser(2, "User", "Name");
    queries.insertUser(3, "Example", "Person");
    queries.insertUser(4, "Rey", "Aparece");
    queries.insertUser(5, "Linus", "Torvalds");
    queries.insertUser(6, "People", "Person");
    queries.insertUser(7, "President", "Obama");
    queries.insertUser(8, "Jane", "Doe");
    queries.insertUser(9, "James", "Woods");
    queries.insertUser(10, "Tom", "Cruise");
    queries.insertUser(11, "Bell", "Graham");
};

module.exports = {initDB}