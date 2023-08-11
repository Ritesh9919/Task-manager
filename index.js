const express = require('express');
const port = 5000;
const connectDB = require('./db/connect');
require('dotenv').config();
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./routes/task'));



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log('Server is running on port:', port);
        })
    } catch (error) {
        console.log(error);
    }
}

start();