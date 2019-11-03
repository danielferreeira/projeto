const config = require('./secret');

module.exports = {
    development: {
        username: config.DATABASE_USER,
        password: config.DATABASE_PASSWORD,
        database: config.DATABASE_NAME,
        host: config.DATABASE_HOST,
        dialect: config.DATABASE_DIALECT
    }
};