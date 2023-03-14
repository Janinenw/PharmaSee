
const { application } = require('express');
const express = require('express')
const router = express.Router()
const Pharmacy = require('../models/pharmacies.js')
const seedData = require('../models/seed.js')


//Index
// router.get('/', (req, res) => {
// 	console.log("index!");
  
// 	Pharmacy.find({}, (err, foundPharmacys) => {
// 	  if (err) {
// 		console.log(err.message);
// 	  } else {
// 		console.log(foundPharmacys);
// 		res.render('index.ejs', {
// 		  pharmacys: foundPharmacys
// 		});
// 	  }
// 	});
//   });

router.get('/', (req, res) => {
	Pharmacy.find({}, (err, foundPharmacys) => {
	  if (err) {
		console.log(err.message);
	  } else {
		foundPharmacys.sort((a, b) => (a.town > b.town) ? 1 : -1);
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
    Pharmacy.create(seedData, (err, data) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log(seedData);
        }
        res.redirect('/pharmacy');
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



router.put('/:id', (req, res) => {
	if (req.body.inStock === 'on') {
	
		req.body.inStock = true;
	} else {
		
		req.body.inStock = false;
	}
	
	Pharmacy.findByIdAndUpdate(req.params.id, req.body, { new: true,}, 
		(err, updatedPharmacy) => {
	
			if(err) {
				console.log(err)
			
			} else {
				console.log("updated pharmacy")
			
				res.redirect('/pharmacy')
			}
	
		})
	})
	

  //create 




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