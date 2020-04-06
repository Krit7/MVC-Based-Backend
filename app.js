const express = require('express')
const bodyparser= require('body-parser')

const app= express();

app.get('/',(req,res)=>{
    res.send("Hi Server")
})

//PORT
app.listen(3000, function(req, res) {
    console.log("Server Has Started..!!!");
});