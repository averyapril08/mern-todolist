const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

app.use(express.json());

const db = config.get('mongoURI');

mongoose.connect(db,{
    useNewUrlParser: true,
    useCreateIndex: true
})
        .then(console.log("DataBase connected"))
        .catch(err => console.log("hhhhhh", err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started at ${port}`));
    
