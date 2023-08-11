const express = require('express');
const port = 5000;
const connectDB = require('./db/connect');
const app = express();
require('dotenv').config();
const notFound = require('./middleware/not_found');
const errorHandlerMiddleware = require('./middleware/error_handler');


app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/', require('./routes/task'));

app.use(notFound);
app.use(errorHandlerMiddleware);



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