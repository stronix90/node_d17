require("dotenv").config();

const ENV = {
    MONGO_CONN_STRING: process.env.MONGO_CONN_STRING,
    PERSISTENCIA: process.env.PERSISTENCIA,
    PORT: process.env.PORT,
};

module.exports = ENV;
