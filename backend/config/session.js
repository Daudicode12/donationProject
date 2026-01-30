const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const dotenv = require('dotenv');
const db = require('./db')
let cookie = require('cookie-parser');

// load environment variable from .env file
dotenv.config();
app.use(
    session(
        {
            key: 'donationexpress_session',
            secret: process.env.SESSION_SECRET,
            store: sessionStore,
            resave: true,
            saveUninitialized: false,
            cookie: {
                maxAge: 3600000 //1hour
            }
        }
    )
);
// configure session with the specifiefd options
const options = {
    expiration: 3600000, //1hour
    createDatabaseTable: true,
    clearExpired: true,
    checkExpirationInterval: 900000, //15 minutes
    connectionLimit: 10,
}

const sessionStore = new MySQLStore(options,db.promise())

module.exports = sessionStore;