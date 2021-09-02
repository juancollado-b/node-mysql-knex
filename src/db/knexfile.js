// Update with your config settings.
const { HOST, DB_USER, DB_USER_PASS, DB_NAME } = require("../config/globals");

module.exports = {
    development: {
        client: "mysql",
        connection: {
            host: HOST,
            user: DB_USER,
            password: DB_USER_PASS,
            database: DB_NAME,
        },
    },
};
