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
app.use('/api/auth', authRoutes);
app.use(express.static('public/homesection'));

app.use('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/homesection/index.html'));
});

// homesection routes
app.use(('/about'), (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/homesection/about.html'));
})
app.use(('/donate'), (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/homesection/about.html#donate'));   
});

app.use(('/contact'), (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/homesection/contact.html'));   
});
app.use(('/signup'), (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/homesection/auth/signup/signup.html'));   
});
app.use(('/gallery'), (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/homesection/gallery.html'));
});
app.use(('/login'), (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/homesection/login.html'));   
});
app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
    
});