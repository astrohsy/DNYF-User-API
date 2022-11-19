require('dotenv').config()
const config = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: process.env.PORT || 3306,
        password: process.env.DB_PASS,
        database: process.env.DB,
    }
};

module.exports = config;