# PharmaSee
PharmaSee is a full CRUD application built using MongoDB, Express, EJS, Node.js, CSS, and HTML5. The purpose of this app is to help users locate pharmacies that have Adderall in stock, given the national shortage of the medication. The application relies on user contributions for updates and edits to ensure accuracy and timely information.

##  User Stories- Users Can:

* Look through pharmacies organized by town
* See Adderall stock status
* Click on a pharmacy to see its address and phone number
* Add a pharmacy to the list
* Update a pharmacy's stock status
* Delete a pharmacy in the instance of duplicates, or other errors

##  Wireframe:


Models: pharmacies.js

Schema:
```
const pharmacySchema = new mongoose.Schema({
name: { type: String, required: true},
address: {type: String, required: true},
phoneNumber: {type: String, required: true},
dateUpdated: { type: String, required: true },
inStock: {type: Boolean, default: true},
})
```

Views: Index, edit, update, new

Controllers: pharmacies.js

A list of routes (e.g. POST /pins/ allows users to post a picture of a pin)

GET/pharmacy: Index route that lists all pharmacies and displays whether or not they have Adderall in stock

GET/pharmacy/id: show route that will display additional information about each pharmacy( phone number, etc)

GET/pharmacy/new: new route that displays form to add pharmacy to list

POST/pharmacy: create route that will add new pharmacy to list based on form submitted through pharmacies/new

GET/pharmacy:/id/edit- displays form to edit existing pharmacy

PUT/pharmacy/:id- updates based on form submitted through edit route

DELETE/pharmacy/:id (probably will only need to be used in cases of duplicates)- deletes existing pharmacy

<img width="648" alt="PharmaSee-wireframe" src="https://media.git.generalassemb.ly/user/46358/files/1dcedaa2-9256-4fc1-99b5-6d8eccb4fa89">



##  Upcoming Features: 
* Integration of geolocation 
* Addition of timestamps to each list entry 
* Improved accessibility and responsive design


##  Deployed via Heroku: https://pharmasee.herokuapp.com

