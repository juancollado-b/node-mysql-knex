require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 3000,
    HOST: process.env.HOST || "localhost",
    DB_USER: process.env.DB_USER || "coder",
    DB_USER_PASS: process.env.DB_USER_PASS || "coder",
    DB_NAME: process.env.DB_NAME || "coderhouse",
    NODE_ENV: process.env.NODE_ENV || "development",
};
