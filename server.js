const express = require ('express');
const app =  express();
require('dotenv').config();
const mongoose = require('mongoose')

//MONGODB ATLAS CONNECTION
mongoose.connect(process.env.MONGODB_URL)

const db = mongoose.connection
db.on('err', (err)=> console.log(err.message + "is Mongo not running?"))
db.on('connected', () => console.log( "Mongo is connected and running"))
db.on('disconnected', () => console.log("Mongo is disconnected"))


const PORT = process.env.PORT || 3000
app.listen (PORT,() => console.log (`Server is listening on port: ${PORT}`));