const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const dotenv = require('dotenv');
const db = require('./db')

// load environment variable from .env file
dotenv.config();

// configure session with the specifiefd options
const options = {
    expiration: 3600000, //10minutes
    createDatabaseTable: true,
    clearExpired: true,
    checkExpirationInterval: 900000, //15 minutes
    connectionLimit: 10,
}

const sessionStore = new MySQLStore(options,db.promise())

module.exports = sessionStore;