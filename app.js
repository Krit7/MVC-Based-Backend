const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const router = require('./routes/routes')

const app = express();

//EJS Setup
app.set('view engine', 'ejs')


//Dependencies Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//MongoDB Setup
mongoose.connect("mongodb://localhost/hotels", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    console.log('Successfully Connected To Database')
);






app.use(router);



//Handling Wrong Routes
app.use((req, res) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found'
    })
})

//Serves Host Port
app.listen(3000, function (req, res) {
    console.log("Server Has Started..!!!");
});