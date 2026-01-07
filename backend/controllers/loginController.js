//installing necessary modules
const express = require('express');
const jwt = require('jsonwebtoken');
const connection = require('../config/db');
const bcrypt = require('bcrypt');
const signupController = require('./signupController');


//login controller
const loginController = (req, res) => {
    const { email, password } = req.body;
    // checking if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    // check if user exists in the database
    const getUserQuery = 'SELECT * FROM donation WHERE email = ?';
    connection.query(getUserQuery, [email], async (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'An error occured please try agin later',
                error: err
            });
        }
        if (result.length === 0) {
            return res.status(400).json({
                message: 'User does not exist',
                error: 'No user found with the provided credentials'
            });
        }
        // comparing provided password with the hashed password in the database
        const user = result[0];
        // comparing the passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({
                message: 'Invalid credentials'
            });
        }

        // generating JWT token
        const token = jwt.sign({
            id: user.id,
            email: user.email
        }, process.env.JWT_SECRET,
            { expiresIn: '1h' });
        return res.status(200).json({
            message: 'Login successful',
            token: token
        });
    });
}
module.exports = loginController;