// importing database connection
const connection = require('../../config/db');
const bcrypt = require('bcrypt');

const signupController = (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All the fields are required' });
    }

    // validating email format, password strength
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }



    // checking if user already exists, hashing password, saving to database
    const checkUserQuery = 'SELECT * FROM donation WHERE email = ?';
    connection.query(checkUserQuery, [email], async (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Database error',
                error: err
            });
        }
        if (result.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }
            // hashing password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

        // inserting new user to the database
        const insertUserQuery = 'INSERT INTO donation (username, email, password) VALUES (?, ?, ?)';
        connection.query(insertUserQuery, [username, email, password], (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: 'Database error',
                    error: err
                });
            }
            res.status(200).json({ message: 'User registered successfully' });
        });
    });


};

//login controller
const loginController = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

};

module.exports = { signupController, loginController };