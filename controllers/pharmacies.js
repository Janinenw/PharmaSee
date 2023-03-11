
const express = require('express')
// const { findOneAndUpdate } = require('../models/pharmacies.js')
const router = express.Router()
const Pharmacy = require('../models/pharmacies.js')
// const mongoose = require('mongoose');


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




// router.get('/seed', (req, res) => {
//     Pharmacy.create([
//         {
//             name: 'Rite Aid',
//             town: 'Fairfield',
//             address: '1619 Post Road',
//             phoneNumber: '(203) 259-2353',
//             dateUpdated: '2023-03-07',
//             inStock: true
//         },
//         {
//             name: 'Walgreens',
//             town: 'Westport',
//             address: '880 Post Road East',
//             phoneNumber: '(203) 226-8452',
//             dateUpdated: '2023-03-03',
//             inStock: false
//         },
//         {
//             name: 'CVS',
//             town: 'Fairfield',
//             address: '700 Post Road',
//             phoneNumber: '(203) 255-1089',
//             dateUpdated: '2023-03-03',
//             inStock: false
//         }
//     ], (err, createdPharmacies) => {
//         if (err) {
//             console.log(err.message);
//         } else {
//             console.log("data seeded");
//             res.redirect("/pharmacy");
//         }
//     });
// });

//show


// router.get("/:id", (req, res) => {
//     const id = req.params.id;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         res.status(400).send("Invalid ID");
//         return;
//     }
//     Pharmacy.findById(id, (err, foundPharmacy) => {
//         if (err) {
//             console.log(err.message);
//             res.status(500).send("Error finding pharmacy");
//         } else if (!foundPharmacy) {
//             res.status(404).send("Pharmacy not found");
//         } else {
//             res.render("show.ejs", {
//                 pharmacy: foundPharmacy
//             });
//         }
//     });
// });


//show
router.get('/:id', (req, res) => {
	Pharmacy.findById(req.params.id, (err, foundPharmacys) => {
		if(err)
		{console.log(err.message)}
		res.render('show.ejs', {
			pharmacy: foundPharmacys
		})
	})
})

// router.get('/:id', (req, res) => {
// 	Pharmacy.findById(req.params.id, (err, foundPharmacy) => {
// 	  if (err) {
// 		console.log(err.message)
// 	  } else if (foundPharmacy) {
// 		res.render('show.ejs', {
// 		  pharmacy: foundPharmacy
// 		})
// 	  } else {
// 		res.status(404).send('Pharmacy not found')
// 	  }
// 	})
//   })

// const mongoose = require('mongoose');
// const ObjectId = mongoose.Types.ObjectId;


// router.get('/:id', (req, res) => {
//   const id = ObjectId(req.params.id);
//   Pharmacy.findById(id, (err, foundPharmacy) => {

//   });
// });
  module.exports = router