const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const router=require('./routes/routes')

//Dependencies Setup
mongoose.connect("mongodb://localhost/hotels", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/',router)

app.use('/gethotel',router)


//PORT
app.listen(3000, function (req, res) {
    console.log("Server Has Started..!!!");
});