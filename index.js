const express = require('express');
const port = 5000;
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./routes/task'));

app.listen(port, () => {
    console.log('Server is running on port:', port);
})