const PORT = process.env.PORT || 3000

require('dotenv').config();
const methodOverride = require("method-override")
const express = require("express")
const app = express()
const mongoose = require('mongoose');
// const methodOverride = require("method-override")
const pharmacyController = require ('./controllers/pharmacies.js')

const db = mongoose.connection

const MONGODB_URI = process.env.MONGODB_URI;

// Database Connection
mongoose.connect(process.env.MONGODB_URI);


mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
    );
    


// const db = mongoose.connection

db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.use('/pharmacy', pharmacyController)
app.use(express.static('public'));




app.listen (PORT,() => console.log (`Server is listening on port: ${PORT}`));






