const mysql = require('mysql2');
const dotenv = require('dotenv');

// load environment variable from .env file
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : 'donationdb'
});


connection.connect((err)=>{
    if(err){
        console.log('Error connecting to database:', err)
    }else{
        console.log('Connected to database successfully');
    }
})

module.exports = connection;