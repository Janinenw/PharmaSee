

const express = require('express')
// const { findOneAndUpdate } = require('../models/pharmacies.js')
const router = express.Router()
const Pharmacy = require('../models/pharmacies.js')

//Index
router.get('/', (req, res) => {
	console.log("index!");
  
	Pharmacy.find({}, (err, foundPharmacys) => {
	  if (err) {
		console.log(err.message);
	  } else {
		console.log(foundPharmacys);
		res.render('index.ejs', {
		  pharmacys: foundPharmacys
		});
	  }
	});
  });

  // new
router.get('/new', (req, res) => {
	console.log("New pharmacy route hit!")
    res.render("new.ejs")
})


  module.exports = router