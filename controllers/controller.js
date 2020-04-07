const mongoose = require('mongoose')
const Hotel = require('../models/hotel')

//Validate Input MiddleWare
validateInputs = (req, res, next) => {
    const editMode = req.query.edit
    if (req.body.name || req.body.address || req.body.description || req.body.star || req.body.valetParking || req.body.diningAvailable || req.body.roomsAvailable || req.body.taxiServices) {
        next();
    } else {
        console.log("Fields Cannot be Empty !!! Input Required")
    }
}


//Return All Hotels
getHotels = (req, res) => {
    Hotel.find({}, (err, gethotels) => {
        if (err) {
            console.log(err)
        } else {
            // SeedDB()
            res.render('index', {
                hotels: gethotels,
                pageTitle: 'Hotels'
            })
        }
    })
};

//Get Hotel By ID
getHotel = (req, res) => {
    const hotelID = req.params.id
    const editMode = req.query.edit
    Hotel.findById(hotelID, (err, hotel) => {
        if (err) {
            console.log(err)
        } else {
            if (editMode) {
                res.render('edit-hotel', {
                    hotel: hotel,
                    pageTitle: `Edit ${hotel.name}`
                })
            } else {
                res.render('hotel-details', {
                    hotel: hotel,
                    pageTitle: hotel.name
                })
            }
        }
    });
};

//New Hotel Form Page
newHotelPage = (req, res) => {
    res.render('new-hotel', {
        pageTitle: 'Add Hotel'
    })
}

//Add Hotel
addHotel = (req, res) => {
    const newHotel = {
        name: req.body.name,
        address: req.body.address,
        description: req.body.description,
        star: req.body.star,
        valetParking: req.body.valetParking,
        diningAvailable: req.body.diningAvailable,
        roomsAvailable: req.body.roomsAvailable,
        taxiServices: req.body.taxiServices
    }

    Hotel.create(newHotel, (err, createdHotel) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/')
        }
    })
};



//Edit Hotel by ID
editHotel = (req, res) => {
    const hotelID = req.params.id
    const editedHotel = {
        name: req.body.name,
        address: req.body.address,
        description: req.body.description,
        star: req.body.star,
        valetParking: req.body.valetParking,
        diningAvailable: req.body.diningAvailable,
        roomsAvailable: req.body.roomsAvailable,
        taxiServices: req.body.taxiServices
    }

    Hotel.findByIdAndUpdate(hotelID, editedHotel, (err, editedHotel) => {
        if (err) {
            console.log(err)
        } else {
            const redirectLink = '/hotel/' + hotelID
            res.redirect(redirectLink)
        }
    })

};


//Delete Hotel by ID
deleteHotel = (req, res) => {
    const hotelID = req.params.id
    Hotel.findByIdAndDelete(hotelID, (err, deletedHotel) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/');
        }
    })
}


module.exports = {
    validateInputs,
    getHotels,
    getHotel,
    newHotelPage,
    addHotel,
    editHotel,
    deleteHotel
}