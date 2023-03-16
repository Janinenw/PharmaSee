require('dotenv').config();
const PORT = process.env.PORT || 3000


const methodOverride = require("method-override")
const express = require("express")
const app = express()
const mongoose = require('mongoose');
const pharmacyController = require ('./controllers/pharmacies.js')
const path = require('path')

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.set("strictQuery", true) 
mongoose.connect(MONGODB_URI,{
    useNewURLParser: false,
})







const db = mongoose.connection

db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.use('/pharmacy', pharmacyController)
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req,res)=>{
    res.render("homepage.ejs")
  })


app.listen (PORT,() => console.log (`Server is listening on port: ${PORT}`));






