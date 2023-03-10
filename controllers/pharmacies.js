const express = require('express')
const router = express.Router()
const Pharmacy = require ('../models/pharmacies.js')
const pharmacyData = require('../models/seed.');




//routes


//index- working in postman
router.get("/pharmacy", (req, res) => {
	// console.log("index running")
    Pharmacy.find({}, (err, foundPharmacy) => {
        if (err) { console.log(err.message) }
        res.render('index.ejs', {
            Pharmacy: foundPharmacy
        })
    })
  
})

//new- works in postman
router.get('/pharmacy/new', (req, res) => {
    res.render("new.ejs")
})

router.get('/seed', (req, res) =>{
	pharmacy.create([
	
	], (err, data) => {
		res.redirect('/pharmacy')
	})
})

//delete
router.delete("/pharmacy/id", (req, res) => {
    {
        Pharmacy.findByIdAndDelete(req.params.id, (err, deletedPharmacy) => {
            if (err) { console.log(err.message) }
            else {
                console.log(deletedPharmacy)
                res.redirect("/pharmacy")
            }
        })
    }
})

//update

router.put('/pharmacy/:id', (req, res) => {

	if (req.body.inStock === "on") {
		req.body.inStock = true;
	} else {
		req.body.inStock = false;
	}

	Pharmacy.findByIdAndUpdate(req.params.id, req.body, { new: true}, 
	(err, updatedPharmacy) => {
		if(err) {
			console.log(err);
			res.send(err);
		} else {
			console.log(updatedPharmacy);
			res.redirect('/pharmacy');
		}

	});
});


// edit  
router.get("/pharmacy/:id/edit", (req, res) => {
    Pharmacy.findById(req.params.id, (err, foundPharmacy) => (
        res.render("edit.ejs",
            { Pharmacy: foundPharmacy })
    ))
})

// show 
router.get("/pharmacy/:id", (req, res) => {
    Pharmacy.findById(req.params.id, (err, foundPharmacy) => {
        if (err) {
            console.log(error)
        } else {
            res.render("show.ejs", {
                pharmacy: foundPharmacy
            })
        }
    })
})





















module.exports = router