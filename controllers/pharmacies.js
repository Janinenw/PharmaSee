
const express = require('express')
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
	console.log("New pharmacy page hit")
    res.render("new.ejs")
})




router.get('/seed', (req, res) => {
    Pharmacy.create([
        {
            name: 'Rite Aid',
            town: 'Fairfield',
            address: '1619 Post Road',
            phoneNumber: '(203) 259-2353',
            dateUpdated: '2023-03-07',
            inStock: true
        },
        {
            name: 'Walgreens',
            town: 'Westport',
            address: '880 Post Road East',
            phoneNumber: '(203) 226-8452',
            dateUpdated: '2023-03-03',
            inStock: false
        },
        {
            name: 'CVS',
            town: 'Fairfield',
            address: '700 Post Road',
            phoneNumber: '(203) 255-1089',
            dateUpdated: '2023-03-03',
            inStock: false
        }
    ], (err, createdPharmacies) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("data seeded");
            res.redirect("/pharmacy");
        }
    });
});




//delete

router.delete('/:id', (req, res) => {
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

router.put('/:id', (req, res) => {
	Pharmacy.findByIdAndUpdate(req.params.id, req.body.pharmacy, (err, updatedPharmacy) => {
	  if (err) {
		console.log(err);
		res.redirect('/pharmacy');
	  } else {
		res.redirect('/pharmacy/' + req.params.id);
	  }
	});
  });
  

  //create 



// router.post('/', (req, res) => {
// 	const { name, address, phone } = req.body;
// 	const newPharmacy = new Pharmacy({
// 	  name,
// 	  address,
// 	  phone
// 	});
  
// 	// Save the new pharmacy to the database
// 	newPharmacy.save((err, savedPharmacy) => {
// 	  if (err) {
// 		console.log(err.message);
// 		res.redirect('/pharmacy/new');
// 	  } else {
// 		console.log(savedPharmacy);
// 		res.redirect('/pharmacy');
// 	  }
// 	});
//   });
router.post('/', (req, res) => {
	if (req.body.inStock === 'on') {
	
		req.body.inStock = true;
	} else {
		
		req.body.inStock = false;
	}
	
	
	Pharmacy.create(req.body, (error, createdPharmacy) => {
		 console.log("created pharmacy")
			res.redirect('/pharmacy')
			});
		  })
		
	  ;
	



//   });

  
//edit (form)
router.get('/:id/edit', (req, res) => {
	Pharmacy.findById(req.params.id, (err, foundPharmacys) => {
	  if (err) {
		console.log(err);
		res.redirect('/pharmacy');
	  } else {
		res.render('edit.ejs', { pharmacy: foundPharmacys });
	  }
	});
  });

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



  module.exports = router