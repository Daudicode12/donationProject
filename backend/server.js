const express = require ('express');
const dotenv = require ('dotenv');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const authRoutes = require ('./routes/auth');
const path = require('path');


// load environment variable from .env file
dotenv.config();


const app = express();
const port = process.env.PORT;
app.use (cors());
app.use (bodyParser.json());
app.use (bodyParser.urlencoded ({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// API routes
app.use('/api/auth', authRoutes);

// HTML page routes
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/homesection/index.html'));
});

app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/homesection/about.html'));
});

app.get('/contact', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/homesection/contact.html'));   
});

app.get('/signup', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/homesection/auth/signup/signup.html'));   
});

app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/homesection/auth/login/login.html'));   
});

app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
    
});