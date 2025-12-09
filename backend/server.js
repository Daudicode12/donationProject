const express = require ('express');
const dotenv = require ('dotenv');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const authRoutes = require ('./routes/auth');

// load environment variable from .env file
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use (cors());
app.use (bodyParser.json());
app.use (bodyParser.urlencoded ({ extended: true }));
app.use('/api/auth', authRoutes);



app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
    
});