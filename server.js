const PORT = process.env.PORT || 3000

require('dotenv').config();
const methodOverride = require("method-override")
const express = require("express")
const app = express()
const mongoose = require('mongoose');
// const methodOverride = require("method-override")
const pharmacyController = require ('./controllers/pharmacies.js')




// Database Connection
mongoose.connect(process.env.MONGODB_URL);





const db = mongoose.connection

db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.use('/pharmacy', pharmacyController)
app.use(express.static('public'));




app.listen (PORT,() => console.log (`Server is listening on port: ${PORT}`));






